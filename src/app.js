import express from "express";
import cors from "cors";

import authRoutes from "./features/auth/authRoutes";

const app = express();

app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use("/auth", authRoutes);

export default app;
