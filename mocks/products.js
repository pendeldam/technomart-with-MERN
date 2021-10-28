const utils = require("../utils");

// mongoDB connection
const mongoose = require("mongoose");
const MONGO_DB_URI = require("../const").MONGO_DB_URI;
const MONGO_ATLAS_URI = require("./const").MONGO_ATLAS_URI
const Product = require("../models/product");

mongoose
  .connect(MONGO_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected...");

    TYPES.forEach(async (type) => {
      const productType = new Product({ name: type });
      const products = generateProducts(PRODUCT_COUNT, type);
      const vendors = new Set();

      products.forEach((product) => {
        const model = require(`../models/product-item/discriminators/${product.type}`);

        const newProduct = new model({
          vendor: product.vendor,
          model: product.model,
          name: product.name,
          image: product.image,
          isBatteryOnly: product.isBatteryOnly,
          isNewOffer: product.isNewOffer,
          price: product.price,
          length: product.length,
          fuelCapacity: product.fuelCapacity,
          isCordless: product.isCordless,
        });

        productType.catalog.push(newProduct);
        vendors.add(product.vendor);
      });

      productType.vendors = [...vendors];
      productType.count = productType.catalog.length;

      await productType
      .save()
      .then(() => console.log("product added"))
      .catch((err) => console.log(err))
      .finally(() => mongoose.disconnect());
    });
  })
  .catch((err) => console.log(err));

// mock variables
const PRODUCT_COUNT = 10;
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
      isBatteryOnly: Math.random() > 0.5 ? true : false,
      isNewOffer: Math.random() > 0.5 ? true : false,
      isCordless: Math.random() > 0.5 ? true : false,
      fuelCapacity: getRandomInteger(5, 20),
      length: getRandomInteger(5, 30),
      price: getRandomInteger(999, 9999),
    };

    return product;
  });
}
