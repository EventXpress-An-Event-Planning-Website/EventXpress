import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import cookieParser from 'cookie-parser'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import { connectDB } from './config/db.js'
const port = process.env.PORT || 5000
import userRoute from './routes/userRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'
import customerRoutes from './routes/customerRoutes.js'
import serviceProviderRoutes from './routes/serviceProviderRoutes.js'


// start database connection
connectDB()

// Create Express app
const app = express()

// Parse JSON bodies
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Parse cookies
app.use(cookieParser())

// user routes
app.use('/api/users', userRoute)

// Upload routes
app.use('/api/upload', uploadRoutes)

//customer routes
app.use('/api/customer',customerRoutes)

app.use('/api/serviceProvider', serviceProviderRoutes)

// Handle errors
app.use(notFound)
app.use(errorHandler)

app
  .listen(port, () => {
    console.log(`Server started on port ${port}`)
  })
  .on('error', (err) => {
    console.error(`Server error: ${err}`)
  })

 
