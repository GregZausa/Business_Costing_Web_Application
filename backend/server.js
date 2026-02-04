import express from "express";
import cors from "cors";
import { globalLimiter } from "./src/middleware/rateLimiter.js";
import authRoutes from "./src/routes/authRoutes.js";
import dotenv from "dotenv";
dotenv.config();
import "./src/config/db.js"

const app = express();
const port = process.env.PORT || "5001";

app.use(
  cors({
    origin: process.env.URL,
    credentials: true,
  })
);

app.use(express.json());
//middleware
app.use(globalLimiter);
//routes
app.use("/api/auth", authRoutes);

app.listen(port, () => {
  console.log(`Server started at ${port}`);
});
