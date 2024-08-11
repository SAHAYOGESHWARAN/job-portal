import express from 'express';
import dotenv from 'dotenv';

dotenv.config()

const app = express();

app.get("/", (req, res) => {
    res.send("<h1> Welcome to job portal</h1>");
});

// Port
const port = process.env.PORT || 8080;

// Listen
app.listen(port, () => {
    console.log(`Node Server Running In ${process.env.DEV_MODE} mode on port no ${port}`);
});
