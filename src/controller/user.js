import bcrypt from "bcryptjs";
import UserModel from "../model/user.js";
import jwt from "jsonwebtoken";

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

    const newUser = await new UserModel(user);

    cars.save();

    return res.status(200).json({
      cars: newUser,
      message: "user was saved successfully.",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "server error" });
  }
};

const LOGIN = async function (req, res) {
  const user = await UserModel.findOne({ email: req.body.email });

  if (!user) {
    return res.status(403).json({ message: "Bad Auth." });
  }

  const isPasswordMatch = bcrypt.compareSync(req.body.password, user.password);

  if (!isPasswordMatch) {
    return res.status(403).json({ message: "Bad Auth." });
  }

  const token = jwt.sign(
    {
      email: user.email,
      userId: user.id,
    },
    "PASSWORD123",
    { expiresIn: "12h" }
  );

  return res
    .status(200)
    .json({ token: token, message: "login was succesfull" });
};
export { SIGN_UP, LOGIN };
