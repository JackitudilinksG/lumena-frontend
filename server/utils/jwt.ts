import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET as string

export function generateJWTToken(userId: string): string {
  const payload = { userId }
  const options = { expiresIn: '1d' as jwt.SignOptions['expiresIn'] }

  return jwt.sign(payload, JWT_SECRET, options)
}

export function verifyJWTToken(token: string): jwt.JwtPayload {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as jwt.JwtPayload
    return decoded
  } catch (error) {
    throw new Error('Invalid token')
  }
}
