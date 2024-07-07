import express from "express";

import {
  GET_CARS,
  GET_CAR_BY_ID,
  DELETE_CARS,
  INSERT_CARS,
  UPDATE_CAR_BY_ID,
} from "../controller/car.js";

const router = express.Router();

router.get("/cars", GET_CARS);

router.get("/cars/:id", GET_CAR_BY_ID);

router.put("/cars/:id", UPDATE_CAR_BY_ID);

router.post("/cars", INSERT_CARS);

router.delete("/cars", DELETE_CARS);

export default router;
