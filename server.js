import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import testRoutes from './routes/testRoutes.js';

dotenv.config();

// mongodb connection
connectDB();

const app = express();

// Test route to ensure server is running
app.get("/", (req, res) => {
    res.send("<h1>Server is running</h1>");
});

// Routes 
app.use('/api/test', testRoutes);

// Port
const port = process.env.PORT || 5000;

// Listen
app.listen(port, () => {
    console.log(`Node Server Running In ${process.env.DEV_MODE || 'development'} mode on port no ${port}`);
});
