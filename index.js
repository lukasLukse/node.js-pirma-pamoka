import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import carRouter from "./src/router/car.js";

import "dotenv/config";

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_CONNECTION)
  .then(() => console.log("Connected to DB successfully."))
  .catch((err) => {
    console.log(err);
  });

app.use(carRouter);

app.use((req, res) => {
  return res.status(404).send("Sorry, endpoint does not exist");
});

app.listen(process.env.PORT, () => {
  console.log(
    `Your application was launched successfully on port ${process.env.PORT}.`
  );
});
