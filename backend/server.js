import path from 'path'
import cors from 'cors'
import express from 'express'
import { Server } from 'socket.io'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
dotenv.config()
import connectDB from './config/db.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'
import categoryRoutes from './routes/categoryRoutes.js'
import subCategoryRoutes from './routes/subCategoryRoutes.js'
import messageRoutes from './routes/messageRouter.js'
import favoriteProductsRoutes from './routes/favoriteProductRoutes.js'
import mongoSanitize from 'express-mongo-sanitize'
import helmet from 'helmet'
import xss from 'xss-clean'

import hpp from 'hpp'

const port = process.env.PORT || 5000

connectDB()
const app = express()

// Body parser middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// security

// Sanitize data
app.use(mongoSanitize())

// Set security headers
app.use(helmet())

// Prevent XSS attacks
app.use(xss())

// Prevent http param pollution
app.use(hpp())

app.use(cors())

// Cookie parser middleware
app.use(cookieParser())

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/upload', uploadRoutes)
app.use('/api/categories', categoryRoutes)
app.use('/api/sub-categories', subCategoryRoutes)
app.use('/api/messages', messageRoutes)
app.use('/api/favorite-products', favoriteProductsRoutes)

app.get('/api/config/paypal', (req, res) =>
  res.send({ clientId: process.env.PAYPAL_CLIENT_ID }),
)

const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html')),
  )
} else {
  app.get('/', (req, res) => {
    res.send('API is running...')
  })
}
app.use(notFound)

app.use(errorHandler)

// Utilisez server.listen pour gérer à la fois l'API express et les connexions Socket.IO
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
