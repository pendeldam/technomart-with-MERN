const Product = require("../models/product");
const CartItem = require("../models/cart-item");

exports.getItems = async (req, res) => {
  try {
    const items = await CartItem.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({
      msg: "Server unavailable",
    });
  }
};

exports.addItem = async (req, res) => {
  try {
    const type = await Product.findOne({ name: req.body.type });
    const product = type.catalog.id(req.body.id);
    
    const item = new CartItem({
      name: product.name,
      price: product.price,
      link: req.params.id,
      image: product.image,
      count: req.body.count,
    });

    const result = await item.save();
    res.json(result);
  } catch (err) {
    res.status(500).json({
      success: false,
      msg: "Server unavailable",
    });
  }
};

exports.setItem = async (req, res) => {
  try {
    const item = await CartItem.findOneAndUpdate(
      { link: req.body.link },
      { $inc: { count: req.body.action } },
      { new: true }
    );

    res.json(item);
  } catch (err) {
    res.status(404).json({
      success: false,
      msg: "object not found",
    });
  }
};

exports.deleteItem = async (req, res) => {
  try {
    const item = await CartItem.findOneAndDelete(req.params.id);

    res.json({
      msg: item._id,
      success: true,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      msg: "object not found",
    });
  }
};
