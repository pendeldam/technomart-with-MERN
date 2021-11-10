const Product = require("../models/product");

exports.getProductById = async function (req, res) {
  try {
    const type = await Product.findOne({ type: req.params.type });
    const product = type.catalog.id(req.params.id);

    const result = {
      content: product,
      breadcrumbs: [
        product.parent().link,
        product.link
      ],
    };

    res.json(result);
  } catch (err) {
    console.log(err);
  }
};

exports.getProductsByType = async function (req, res) {
  try {
    const product = await Product.findOne({ type: req.params.type });
    const result = {
      catalog: product.catalog,
      count: product.count,
      breadcrumbs: [product.link],
    };

    res.json(result);
  } catch (err) {
    console.log(err);
  }
};

exports.getCatalogSections = async function (req, res) {
  try {
    const products = await Product.find({}, { type: 1 });
    res.json(products);
  } catch (err) {
    console.log(err);
  }
};
