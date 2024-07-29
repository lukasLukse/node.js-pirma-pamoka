export default (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);

    if (error) {
      return res.status(401).json({
        message: "you have provided bad data.",
        error: error,
      });
    }

    next();
  };
};
