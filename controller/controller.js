const Product = require("..//models/model");

const getAllProductsStatic = async (req, res) => {
  try {
    const task = await Product.find({
      //we can write where clause just line in sqwl
      // featured:true || like name:'database name'
    });
    res.status(201).json({
      Success: true,
      Response_time: Date.now(),
      data: {
        task,
      },
    });
  } catch (err) {
    res.status(500).json({ message: "INTERNAL SERVER ERROR" });
  }
};

const getAllProducts = async (req, res) => {
  const { feature, name } = req.query;
  const queryObject = {};
  if (feature) {
    queryObject.feature = feature === "true" ? true : false;
  }

  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }
  const product = await Product.find(queryObject);
  res.status(200).json({
    message: "This is get all products api but not static",
    body: req.query,
    data: {
      product,
      size: product.length,
    },
  });
};

const createProduct =  async(req,res)=>{
   try
   {
    const task = await Product.create(req.body);
   }
catch(err)
{
   res.sttus(500).json({
    message:'Internal server error',
   })
}

module.exports = {
  getAllProductsStatic,
  getAllProducts,
};
