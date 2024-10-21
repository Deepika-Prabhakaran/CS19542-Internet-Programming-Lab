import mongoose from "mongoose";

export const connectDB = async (req, res) => {
    // const db = "mongodb+srv://vishaal19:master19@cluster0.l7uzj3v.mongodb.net/?retryWrites=true&w=majority&dbname=expensetrack";
    const db="mongodb+srv://deepikaprabhakaran54:3zN0qcPqsu3E9wCv@cluster0.f6xmh.mongodb.net/?retryWrites=true&w=majority&dbname=expensetracker2";
    const {connection} = await mongoose.connect(db, { useNewUrlParser: true });

    console.log(`MongoDB Connected to ${connection.host}`);

}