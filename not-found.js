const notfound = (req, res) => {
  res.status(404).json({
    message: "Route Does Not Exist",
  });
};

module.exports = notfound;
