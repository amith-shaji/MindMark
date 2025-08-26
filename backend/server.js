const express=require("express")
const cors = require('cors');
const userRoutes=require("./routes/userRoutes")
const dotenv=require("dotenv")
const connectDB=require("./config/db")

const app=express();

app.use(express.json())
app.use(cors());

dotenv.config()

const PORT = process.env.PORT || 5001; 

app.use("/api/notes",userRoutes)

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    uptime: process.uptime().toFixed(0) + 's',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
  });
});

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server running on port 5001");
    });
}).catch((error) => {
    console.error("Failed to connect to DB", error);
});