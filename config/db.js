import mongoose from "mongoose";

const connectDB = async () => {
   try {
       const conn = await mongoose.connect(process.env.MONGO_URI);
       console.log(`Connected To MongoDB Database ${conn.connection.host}`);
   } catch (error) {
       console.error(`Error: ${error.message}`);
       process.exit(1); // Exit the process with failure
   }
};

export default connectDB;
