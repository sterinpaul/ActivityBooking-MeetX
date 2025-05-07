import Activity from "../models/Activity.js";

const helpers = {
    getActivities: async ()=>{
        return await Activity.find({},{_id:0,__v:0});
    },
    findActivity: async(id)=>{
        return await Activity.exists({id})
    }
}

export default helpers