import { NextFunction } from 'express'
import { verifyJWTToken } from '../utils/jwt'

export function authMiddleware(req: any, res: any, next: NextFunction) {
  const token = req.headers['authorization']

  if (!token) {
    return res
      .status(401)
      .json({ message: 'Access denied (No token provided)' })
  }

  try {
    const decoded = verifyJWTToken(token)
    req.id = decoded.userId
    next()
  } catch (error) {
    console.error('Token verification error:', error)
    res.status(401).json({ message: error })
  }
}
