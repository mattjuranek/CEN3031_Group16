const mongoose = require('mongoose')
require('dotenv').config()

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB connected: ${conn.connection.host}`)
        console.log(`Database: ${conn.connection.name}`)
    } 
    catch (err) {
        console.error('MongoDB connection error:', err.message)
        process.exit(1)
    }
}

module.exports = connectDB