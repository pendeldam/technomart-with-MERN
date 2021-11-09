const Product = require("../models/product");

exports.getProductById = async function (req, res) {
  const type = req.params.type;
  try {
    const product = await Product.findOne({ type })
      .select("catalog")
      .then((result) => result.catalog.id(req.params.id));

    const result = {
      content: product,
      breadcrumbs: [
        {
          url: `catalog/${type}`,
          category: type,
        },
        {
          url: `catalog/${type}/${product._id}`,
          category: product.name,
        },
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
      breadcrumbs: [
        {
          url: `catalog/${product.type}`,
          category: product.category,
        },
      ],
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
