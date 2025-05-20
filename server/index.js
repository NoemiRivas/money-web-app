const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./database/db");
const Expense = require("./route/expenseRouter");
const Category = require("./route/categoryRoute");
const cookieParser = require("cookie-parser");
const API_FRONT_URL = process.env.API_VERCEL;
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;
dotenv.config();

/**
 * He eliminado implementacion antigua de usuario-rutas y controlador
 * y he implementado la nueva de clerk
 * mucho mas sencilla  y limpia
 */
const { ClerkExpressWithAuth } = require("@clerk/clerk-sdk-node");

connectDB();

app.use(
  cors({
    origin: "https://money-22l9eu8tu-noemirivas-projects.vercel.app",
    credentials: true,
  })
);

app.use(ClerkExpressWithAuth());
app.use(cookieParser());
app.use(express.json());

app.use("/api/expense", Expense);
app.use("/api/categories", Category);

app.listen(PORT, () => {
  console.log(`Server listen at port ${PORT}`);
});
