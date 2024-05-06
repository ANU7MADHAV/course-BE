import mongoose from "mongoose";

console.log(process.env.DB);

export const connect = async () => {
  try {
    await mongoose.connect(process.env.DB);
    console.log("mongodb connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};
