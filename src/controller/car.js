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

const GET_CARS = function (req, res) {
  if (cars.length) {
    const sortedCars = [...cars].sort((a, b) => a.year - b.year);
    return res.status(200).json({
      response: "success",
      cars: sortedCars,
    });
  }
  return res.status(404).json({
    response: "cars array is empty",
  });
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

const INSERT_CARS = function (req, res) {
  const id = req.body.id;

  const existingCar = cars.find((car) => {
    return car.id === id;
  });

  console.log(existingCar);

  if (!existingCar) {
    cars.push({
      id: req.body.id,
      brand: req.body.brand,
      model: req.body.model,
      year: req.body.year,
    });

    return res.status(201).json({ message: "car was added successfully" });
  }

  return res.status(409).json({ message: "Car with this id is already exist" });
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
