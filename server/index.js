import express from "express";
import cors from "cors";
import dotenv from "dotenv";
// import cookieParser from "cookie-parser";
import { ScriptureRoutes } from "./routes/ScriptureRoutes.js";

dotenv.config();
const app = express();

app.use(express.static("public")); // Automatically sets correct MIME
// Your Express server
app.use(express.static("dist"));

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "dist", "index.html"));
// });

app.use(express.json());
// app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use("/", ScriptureRoutes);
const PORT = 5004 || process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port 5004`);
});
