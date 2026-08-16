import mongoose from 'mongoose';

const connnectDB = async () => {
  
  mongoose.connection.on('connected', () => {
    console.log('MongoDB connected');  
  }) 
  await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`)
}

export default connnectDB;