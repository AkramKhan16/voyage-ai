const express=require("express")
const cors=require("cors")
const dotenv=require("dotenv")
const connectDB=require("./config/db")
const tripRoutes = require("./routes/tripRoutes");
const userRoutes=require('./routes/userRoutes')

// To read ENV files
dotenv.config()
connectDB()

const app=express()

// to read Json files  from React sending data. React has data in JSON(JavaScript Object Notation), this means key also in double quotes and data isn also in double quotes. But mongo need data in JavaScript Objects not JSON. 
app.use(express.json())

// connect both server running hosts of frontend and backend 
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://voyage-ai-alpha-vert.vercel.app"
  ],
  credentials: true
}));

const PORT = process.env.PORT || 5000;

app.use('/',tripRoutes);
app.use('/',userRoutes);

app.listen(PORT,()=>{
  console.log(`Server is running at the ${PORT}`)
})

