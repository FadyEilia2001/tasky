const notFound = (req, res) => {
  res.status(404).json({ msg: "cant find the resource you have requested" });
};

module.exports = notFound;
