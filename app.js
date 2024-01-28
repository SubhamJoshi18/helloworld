require("dotenv").config();
//async error

const express = require("express");
const app = express();
const notfoundMiddleware = require("./not-found");
const startingSchema = require("./db/connect");
const router = require("./router/route");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const port = process.env.PORT || 3000;
app.use("/api/v1/product", router);
app.use(notfoundMiddleware);

const start = async () => {
  //connect Db
  try {
    await startingSchema(process.env.MONGO_URL)
      .then(() => {
        console.log("Connected To MongoDB Database SuccessFully ...");
      })
      .catch((err) => {
        console.log(err);
      });
    app.listen(port, () => {
      console.log(`Server is running on ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
