import express from "express";
import cors from "cors";
import dotenv from "dotenv";
// import cookieParser from "cookie-parser";
import { ScriptureRoutes } from "./routes/ScriptureRoutes.js";

dotenv.config();
const app = express();

app.use(express.json());
// app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use("/", ScriptureRoutes);
const PORT =5004 || process.env.PORT
app.listen(PORT, () => {
  console.log(`Server is running on port 5004`);
});
