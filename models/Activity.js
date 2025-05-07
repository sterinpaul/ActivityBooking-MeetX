import { Schema, model } from "mongoose";
import { v4 as uuid } from "uuid";

const activitySchema = new Schema({
  id: { type: String, required: true, default: ()=>uuid(), unique: true, index: true },
  title: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, require: true },
});
export default model("Activity", activitySchema);
