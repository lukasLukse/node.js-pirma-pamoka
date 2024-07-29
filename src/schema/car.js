import Joi from "joi";

export default Joi.object({
  brand: Joi.string().required(),
  model: Joi.string().required(),
  price: Joi.number().required(),
  imgUrl: Joi.string().required(),
  userId: Joi.string().required(),
});
