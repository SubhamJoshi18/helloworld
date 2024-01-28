require("dotenv").config();

const startingSchema = require("./db/connect");
const Product = require("./models/model");
const jsonProducts = require("./products.json");

const start = async () => {
  try {
    await startingSchema(process.env.MONGO_URL).then(() => {
      console.log("Connected To Database");
    });
    await Product.deleteMany();
    await Product.create(jsonProducts);

    console.log("Success!");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
