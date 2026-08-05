const express=require("express")
const cors=require("cors")
const dotenv=require("dotenv")
const connectDB=require("./config/db")
const tripRoutes = require("./routes/tripRoutes");
const userRoutes=require('./routes/userRoutes')

dotenv.config()
connectDB()

const app=express()

app.use(express.json())
app.use(cors({
  origin: "https://voyage-ai-alpha-vert.vercel.app",
  credentials: true
}));

const PORT = process.env.PORT || 5000;

app.use('/',tripRoutes);
app.use('/',userRoutes);

app.listen(PORT,()=>{
  console.log(`Server is running at the ${PORT}`)
})

