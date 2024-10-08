import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url'
import path from 'path'

import { connect } from './src/db/connectDB.js'

import { galleryRouter } from './src/routes/galleryRoutes.js'
import { productRouter } from './src/routes/productRoutes.js'
import { serviceRouter } from './src/routes/serviceRoutes.js'
import { orderRouter } from './src/routes/orderRoutes.js'
import { adminRouter } from './src/routes/adminRoutes.js'
import { tokenRouter } from './src/routes/tokenRoutes.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
dotenv.config()

const PORT = process.env.PORT || 5000

const corsOptions = {
  origin: ['http://localhost:3000', 'http://192.168.1.8:3000'],
  optionsSuccessStatus: 200,
  credentials: true
}

app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOptions))

app.use('/images', express.static(path.join(__dirname, '../server/images')))

app.use('/api', galleryRouter)
app.use('/api', productRouter)
app.use('/api', serviceRouter)
app.use('/api', orderRouter)
app.use('/api', adminRouter)
app.use('/api', tokenRouter)

app.listen(PORT, () => {
  connect()
  console.log(`Server is listening on port ${PORT}`)
})
