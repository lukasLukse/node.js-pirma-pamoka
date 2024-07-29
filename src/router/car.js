import express from "express";
import {
  GET_CARS,
  GET_CAR_BY_ID,
  DELETE_CAR,
  INSERT_CAR,
  UPDATE_CAR_BY_ID,
} from "../controller/car.js";

import validate from "../middlewares/validation.js";
import { auth } from "../middlewares/auth.js";
import carSchema from "../schema/car.js";
const router = express.Router();

router.get("/cars", auth, GET_CARS);

router.get("/cars/:id", GET_CAR_BY_ID);

router.post("/cars", auth, validate(carSchema), INSERT_CAR);

router.put("/cars/:id", UPDATE_CAR_BY_ID);

router.delete("/cars/:id", DELETE_CAR);

export default router;
