import express from "express";
import {
  GET_CARS,
  GET_CAR_BY_ID,
  DELETE_CAR,
  INSERT_CARS,
  UPDATE_CAR_BY_ID,
} from "../controller/car.js";

const router = express.Router();

router.get("/cars", GET_CARS);

router.get("/cars/:id", GET_CAR_BY_ID);

router.post("/cars", INSERT_CARS);

router.put("/cars/:id", UPDATE_CAR_BY_ID);

router.delete("/cars/:id", DELETE_CAR);

export default router;
