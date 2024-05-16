import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import { connect } from "../config/db.js";
import instructorRouter from "../routes/instructorRoutes.js";
import userRouter from "../routes/userRoutes.js";
import paymentRouter from "../routes/payment.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/instructor", instructorRouter);
app.use("/api/v1/payment", paymentRouter);

const port = 3000;
connect();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
