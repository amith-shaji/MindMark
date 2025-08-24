const express=require("express")
const cors = require('cors');
const userRoutes=require("./routes/userRoutes")
const dotenv=require("dotenv")
const connectDB=require("./config/db")

const app=express();

app.use(express.json())
app.use(cors());

dotenv.config()
app.use("/api/notes",userRoutes)
connectDB().then(() => {
    app.listen(5001, () => {
        console.log("Server running on port 5001");
    });
}).catch((error) => {
    console.error("Failed to connect to DB", error);
});