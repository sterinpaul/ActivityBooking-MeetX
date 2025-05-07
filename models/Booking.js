import { Schema, model } from 'mongoose';

const bookingSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  activityId: { type: String, required: true },
},{
    timestamps: true
});
export default model('Booking', bookingSchema);
