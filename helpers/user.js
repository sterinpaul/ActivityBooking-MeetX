import User from "../models/User.js";

const helpers = {
    findUser: async (email)=>{
        return await User.findOne({ email });
    },
    addUser: async(userData)=>{
        const user = new User(userData);
        return await user.save()
    }
}

export default helpers