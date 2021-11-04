const Product = require("../models/product");

exports.getProduct = async function (req, res) {
  try {
    const product = await Product
      .findOne({ name: req.params.name })
      .select("catalog")
      .then((result) => result.catalog.id(req.params.id));

    res.send(product);
  } catch (err) {
    console.log(err);
  }
};

exports.getSection = async function (req, res) {
  try {
    const product = await Product.findOne({ name: req.params.name });

    res.render("catalog", {
      title: product.name,
      products: product.catalog,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getProducts = async function (req, res) {
  try {
    const products = await Product.find();

    res.render("catalog", {
      title: "Каталог",
      products: products,
    });
  } catch (err) {
    console.log(err);
  }
};
