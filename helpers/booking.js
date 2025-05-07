import mongoose from "mongoose";
import Booking from "../models/Booking.js";

const helpers = {
  addBooking: async (data) => {
    return await Booking.findOneAndUpdate(data,{$set:{data}},{upsert:true});
  },
  getBookings: async (userId) => {
    // converting user id to ObjectId for matching
    const objectId = mongoose.Types.ObjectId.createFromHexString(userId)
    return await Booking.aggregate([
      {
        $match: {
          userId: objectId
        },
      },
      {
        $lookup: {
          from: "activities",
          foreignField: "id",
          localField: "activityId",
          as: "activityDetails",
          pipeline:[
            {
            $project:{
              _id:0,
              __v:0
            }
          }
        ],
        },
      },
      {
        $unwind: "$activityDetails",
      },
      {
        $replaceRoot: { newRoot: "$activityDetails" },
      },
    ])
  },
};

export default helpers;
