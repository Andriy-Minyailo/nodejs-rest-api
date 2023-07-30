const ctrlWrapper = (ctrl) => {
  const decor = async (req, res, next) => {
    try {
      ctrl(req, res);
    } catch (error) {
      next(error);
    }
  };
  return decor;
};

module.exports = ctrlWrapper;
