const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./database/db");
const User = require("./route/userRoute")
const Expense = require("./route/expenseRouter")
const Category = require("./route/categoryRoute")
const cookieParser = require('cookie-parser')
const API_FRONT_URL = process.env.API_FRONT 
const cors =require('cors')
const app = express();
const PORT = process.env.PORT || 3000;

require("dotenv").config();

connectDB();
app.use(cors({
  origin: API_FRONT_URL, 
  credentials: true
}))

app.use(cookieParser());
app.use(express.json());
app.use("/api/user", User)
app.use("/api/expense", Expense)
app.use("/api/", Category)

app.listen(PORT, () => {
  console.log(`Server listen at port ${PORT}`);
});
