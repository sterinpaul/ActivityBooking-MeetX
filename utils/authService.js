import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const authService = {
    encryptPassword:async(password)=>{
        const salt = await bcrypt.genSalt(10)
        return await bcrypt.hash(password,salt)
    },
    comparePassword:async(password,hashedPassword)=>{
        return await bcrypt.compare(password,hashedPassword)
    },
    generateToken:(payload)=>{
        return jwt.sign({data:payload},process.env.JWT_SECRET,{
            expiresIn: "1d"
        })
    },
    verifyToken:(token)=>{
        return jwt.verify(token,process.env.JWT_SECRET)
    }
}

export default authService