import bcrypt from "bcryptjs";
import UserModel from "../model/user.js";

const SIGN_UP = async function (req, res) {
  try {
    if (!req.body.name || !req.body.email || !req.body.password) {
      return res.status(400).json({
        cars: cars,
        message: "You didin't provide necessary data.",
      });
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const user = {
      name: req.body.name,
      email: req.body.email,
      password: hash,
    };

    const cars = await new UserModel(user);

    cars.save();

    return res.status(200).json({
      cars: cars,
      message: "user was saved successfully.",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "server error" });
  }
};

export { SIGN_UP };
