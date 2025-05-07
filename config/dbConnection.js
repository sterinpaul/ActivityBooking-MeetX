import mongoose from 'mongoose'
import seed from '../utils/seed.js';

const mongoDBConnect = ()=>{
    try{
        mongoose.connect(process.env.MONGODB_ATLAS_URL).then(()=>{
            console.log('Database connected');
            // Seed activities initially
            seed()
        })
    }catch(error){
        console.error('Database connection error',error);
        process.exit(1)
    }
}

export default mongoDBConnect