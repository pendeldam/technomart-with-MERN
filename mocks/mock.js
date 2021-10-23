const utils = require("../utils");

// mongoDB connection
const mongoose = require("mongoose");
const MONGO_DB_URI = require("../const").MONGO_DB_URI;
mongoose.connect(MONGO_DB_URI);

// product model
const Product = require("../models/product");

// mock variables
const PRODUCT_COUNT = 50;
const TYPES = ["perforator", "drill", "chainsaw", "screwdriver"];
const VENDORS = ["bosch", "makita", "aeg", "hilti", "dewalt"];
const MODELS = ["bfg 3000", "bfg 6000", "bfg 9000"];

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomArrayItem(array) {
  return array[getRandomInteger(0, array.length)];
}

function generateProducts(count, type) {
  return new Array(count).fill("").map((product) => {
    const type = getRandomArrayItem(TYPES);
    const vendor = getRandomArrayItem(VENDORS);
    const model = `${getRandomArrayItem(MODELS).toUpperCase()}`;
    const name = `${utils.setCapitalLetter(vendor)} ${model}`;
    const image = `${vendor}_${utils.formatImageName(model)}`;

    product = {
      type,
      vendor,
      model,
      name,
      image,
      isNew: Math.random() > 0.5 ? true : false,
      price: getRandomInteger(999, 9999),
    };

    return product;
  });
}

const products = generateProducts(PRODUCT_COUNT);

products.forEach((product) => {
  const newProduct = new Product({
    type: product.type,
    vendor: product.vendor,
    model: product.model,
    name: product.name,
    image: product.image,
    isNewOffer: product.isNew,
    price: product.price,
  });

  newProduct.save().then(() => mongoose.disconnect());
});

