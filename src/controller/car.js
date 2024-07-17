import CarModel from "../model/car.js";

const GET_CARS = async function (req, res) {
  try {
    const cars = await CarModel.find().limit(5);

    res.status(200).json({
      cars: cars,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "server error" });
  }
};

const GET_CAR_BY_ID = async function (req, res) {
  try {
    const id = req.params.id;

    const car = await CarModel.findById(id);

    return res.status(200).json({
      response: "success",
      car: car,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "server error" });
  }
};

const DELETE_CAR = async function (req, res) {
  try {
    const id = req.params.id;

    const car = await CarModel.findByIdAndDelete(id);

    if (!car) {
      return res.status(404).json({ message: "Your car does not exist" });
    }

    return res.status(200).json({
      response: "car was deleted",
      car: car,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "server error" });
  }
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

const UPDATE_CAR_BY_ID = async (req, res) => {
  const id = req.params.id;
  const car = await CarModel.findOneAndUpdate(
    { _id: id },
    { ...req.body },
    { new: true }
  );

  return res
    .status(200)
    .json({ message: "car was updated successfully", car: car });
};

export { GET_CARS, GET_CAR_BY_ID, DELETE_CAR, INSERT_CARS, UPDATE_CAR_BY_ID };
