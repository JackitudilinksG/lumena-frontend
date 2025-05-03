import express from 'express'
import type { Request, Response } from 'express'
import bcrypt from 'bcryptjs'
import { v4 as uuidv4 } from 'uuid'
import { supabase } from '../configs/supabase'
import { User } from '../utils/types'
import { generateJWTToken } from '../utils/jwt'
import { send } from 'process'
import { sendVerificationMail } from '../utils/resend'

const authRouter = express.Router()

authRouter.post('/register', async (req: any, res: any) => {
  const { firstname, lastname, phone, email, password } = req.body as User

  if (!firstname || !lastname || !phone || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' })
  }

  try {
    const { data: existingUser, error: findError } = await supabase
      .from('users')
      .select('*')
      .eq('email', email)
      .single()

    if (findError && findError.code !== 'PGRST116') {
      console.error('Error checking for existing user:', findError)
      return res.status(500).json({ message: 'Internal server error' })
    }

    if (existingUser) {
      return res.status(409).json({ message: 'User already exists' })
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const { data: insertData, error: insertError } = await supabase
      .from('users')
      .insert([
        {
          firstname,
          lastname,
          phone,
          email,
          password: hashedPassword,
          is_verified: false,
        },
      ])
      .select('id')
      .single()

    if (insertError) {
      console.error('Error inserting new user:', insertError)
      return res.status(500).json({ message: 'Error creating user' })
    }

    console.log('User created:', insertData)

    const token = uuidv4()
    await supabase.from('tokens').insert([
      {
        token,
        user_id: insertData.id,
        expires_at: new Date(Date.now() + 60 * 60 * 1000),
      },
    ])
    sendVerificationMail(email, token)

    res.status(201).json({ message: 'User registered successfully' })
  } catch (error) {
    console.error('Error registering user:', error)
    return res.status(500).json({ message: 'Internal server error' })
  }
})


authRouter.post('/login', async (req: any, res: any) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' })
  }

  try {
    const { data: user, error: findError } = await supabase
      .from('users')
      .select('*')
      .eq('email', email)
      .single()

    if (findError) {
      console.error('Error finding user:', findError)
      return res.status(500).json({ message: 'User not found' })
    }

    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' })
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' })
    }

    const token = generateJWTToken(user.id)
    const { password: _, ...safeUser } = user

    res.status(200).json({ message: 'Login successful', safeUser, token })
  } catch (error) {
    console.error('Error logging in:', error)
    return res.status(500).json({ message: 'Internal server error' })
  }
})



export default authRouter
