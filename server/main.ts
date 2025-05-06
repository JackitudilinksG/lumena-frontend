import express from 'express'
import cors from 'cors'
import authRouter from './controllers/auth'
import { authMiddleware } from './middleware/auth'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const corsOptions = {
  origin: 'http://localhost:8081',
}
app.use(cors(corsOptions))

app.use('/api/auth', authRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
