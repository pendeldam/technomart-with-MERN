const utils = require("../utils");

// mock variables
const PRODUCT_COUNT = 10;
const VENDORS = ["bosch", "makita", "aeg", "hilti", "dewalt"];
const MODELS = ["bfg 3000", "bfg 6000", "bfg 9000"];
const TYPES = [
  {
    type: "perforator",
    name: "перфораторы",
  },
  {
    type: "drill",
    name: "дрели",
  },
  {
    type: "chainsaw",
    name: "бензопилы",
  },
  {
    type: "screwdriver",
    name: "шуруповерты",
  },
];

// mongoDB connection
const mongoose = require("mongoose");
const MONGO_DB_URI = require("../const").MONGO_DB_URI;
const MONGO_ATLAS_URI = require("../const").MONGO_ATLAS_URI;
const Product = require("../models/product");

mongoose
  .connect(MONGO_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected...");

    TYPES.forEach(async ({type, name}) => {
      const productType = new Product({ type: type });
      const products = generateProducts(PRODUCT_COUNT, type);
      const vendors = new Set();

      products.forEach((product) => {
        const model = require(`../models/product-item/discriminators/${type}`);

        const newProduct = new model({
          _id: product.id,
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
          rating: product.rating,
          link: product.link,
        });

        productType.catalog.push(newProduct);
        vendors.add(product.vendor);
      });

      productType.vendors = [...vendors];
      productType.count = productType.catalog.length;
      productType.link = { url: type, name: name };

      await productType
        .save()
        .then(() => console.log("product added"))
        .catch((err) => console.log(err))
        .finally(() => mongoose.disconnect());
    });
  })
  .catch((err) => console.log(err));

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomArrayItem(array) {
  return array[getRandomInteger(0, array.length)];
}

function generateProducts(count, type) {
  return new Array(count).fill("").map((product) => {
    const id = mongoose.Types.ObjectId();
    const vendor = getRandomArrayItem(VENDORS);
    const model = `${getRandomArrayItem(MODELS).toUpperCase()}`;
    const name = `${utils.setCapitalLetter(vendor)} ${model}`;
    const image = `${vendor}_${utils.formatImageName(model)}`;

    product = {
      id,
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
      rating: getRandomInteger(1, 6),
      price: getRandomInteger(999, 9999),
      link: {url: id, name},
    };

    return product;
  });
}
