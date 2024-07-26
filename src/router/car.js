import express from "express";
import {
  GET_CARS,
  GET_CAR_BY_ID,
  DELETE_CAR,
  INSERT_CAR,
  UPDATE_CAR_BY_ID,
} from "../controller/car.js";

import { auth } from "../middlewares/auth.js";
const router = express.Router();

router.get("/cars", auth, GET_CARS);

router.get("/cars/:id", GET_CAR_BY_ID);

router.post("/cars", auth, INSERT_CAR);

router.put("/cars/:id", UPDATE_CAR_BY_ID);

router.delete("/cars/:id", DELETE_CAR);

export default router;
