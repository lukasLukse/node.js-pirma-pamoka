import mongoose from "mongoose";

const carSchema = mongoose.Schema({
  brand: { type: String, required: true, min: 3 },
  model: { type: String, required: true, min: 1 },
  price: { type: Number, required: true },
  imgUrl: { type: String, required: true },
  userId: { type: String, required: true },
});

export default mongoose.model("Car", carSchema);
