import CarModel from "../model/car.js";

let cars = [
  {
    id: 1,
    brand: "Porsche",
    model: "Panamera",
    year: 2018,
  },
  {
    id: 2,
    brand: "Fiat",
    model: "500",
    year: 2020,
  },
  {
    id: 3,
    brand: "VW",
    model: "Beetle",
    year: 1990,
  },
];

const GET_CARS = async function (req, res) {
  try {
    const cars = await CarModel.find();

    res.status(200).json({
      cars: cars,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "server error" });
  }
};

const GET_CAR_BY_ID = function (req, res) {
  const id = req.params.id;

  const car = cars.find((car) => {
    return car.id == id;
  });

  if (!car) {
    return res.status(404).json({
      message: `car with ${id} id does not exist`,
    });
  }

  return res.status(200).json({
    response: "success",
    car: car,
  });
};

const DELETE_CARS = function (req, res) {
  cars = [];

  return res.status(200).json({
    response: "all the cars was deleted",
  });
};

const INSERT_CARS = async function (req, res) {
  try {
    const car = new CarModel({
      brand: req.body.brand,
      model: req.body.model,
      price: req.body.price,
      isNewCar: req.body.isNewCar,
    });

    await car.save();

    return res.status(201).json({ message: "car was added successfully" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "server error" });
  }
};

const UPDATE_CAR_BY_ID = (req, res) => {
  const id = req.params.id;
  const body = req.body;

  const idx = cars.findIndex((car) => {
    return car.id == id;
  });

  cars[idx] = { ...cars[idx], ...body };

  return res.status(200).json({ message: "car was updated successfully" });
};

export { GET_CARS, GET_CAR_BY_ID, DELETE_CARS, INSERT_CARS, UPDATE_CAR_BY_ID };
