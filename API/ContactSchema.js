import mongoose from "mongoose";

const contactDetails = new mongoose.Schema({
  name: { type: String, required: true },
  gmail: { type: String, required: true },
  phone: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});
export const Contact = mongoose.model('Contact', contactDetails);