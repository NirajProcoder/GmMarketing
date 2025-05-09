import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";
import connectDb from "./config/connectDb.js";

const app = express();
app.use(cors());
app.options("*", cors());

app.use(express.json());
app.use(cookieParser());
app.use(morgan());
app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);

app.get("/", (request, response) => {
  //// server to client
  response.json({
    message: "Server is running " + process.env.PORT,
  });
});

connectDb().then(() => {
  app.listen(process.env.PORT, () => {
    console.log("Server is running  " + process.env.PORT);
  });
});
