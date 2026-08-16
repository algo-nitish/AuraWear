import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connnectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// App Config

const app = express()
const Port = process.env.PORT || 4000
connnectDB()
connectCloudinary()

// Middleware
app.use(express.json())
app.use(cors())



// API Endpoints
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.use('/api/cart', cartRouter)
app.use('/api/order', orderRouter)

// Serve Admin Dashboard
app.use('/admin', express.static(path.join(__dirname, '../admin/dist')))

// Serve Frontend
app.use(express.static(path.join(__dirname, '../frontend/dist')))

// Handle Client Routing for Frontend
app.get('*', (req, res) => {
    if (req.path.startsWith('/api')) {
        return res.status(404).send('API endpoint not found');
    }
    if (req.path.startsWith('/admin')) {
        return res.sendFile(path.join(__dirname, '../admin/dist/index.html'));
    }
    res.sendFile(path.join(__dirname, '../frontend/dist/index.html'))
})

app.listen(Port,() => console.log('Server is running on port : '+ Port))
