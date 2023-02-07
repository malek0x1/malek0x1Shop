const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/testdb1", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Collection = mongoose.model(
  "collections",
  new mongoose.Schema({
    categoryId: Number,
    category: String,
    children: [
      {
        id: Number,
        name: String,
        price: Number,
        variants: {
          color: [String],
          sizes: [String],
        },
        image: String,
        description: String,
      },
    ],
  })
);

// fetch products for the slider
app.get("/api/collections/all/:limit?", async (req, res) => {
  const data = await Collection.find({}).lean();
  const output = data.map((cat) => {
    return {
      category: cat.category,
      id: cat.categoryId,
      children: cat.children.slice(
        req.params.limit ? Number(`-${req.params.limit}`) : 0
      ),
    };
  });
  res.header({ "Access-Control-Allow-Origin": "*" });
  res.json(output);
});
// fetch collection's products
app.get("/api/products/:id", async (req, res) => {
  const data = await Collection.find({ categoryId: req.params.id });
  res.header({ "Access-Control-Allow-Origin": "*" });
  res.json(data);
});

app.get("/api/search/:keyword", async (req, res) => {
  const keyword = req.params.keyword;

  const products = await Collection.find({}).lean(); //[{},{},{}]
  let filteredProduct = products.map((p) =>
    p.children.filter(
      (key) => key.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
    )
  );
  res.header({ "Access-Control-Allow-Origin": "*" });
  res.json(...filteredProduct);
});

app.get("/api/product/:categoryId/:productId", async (req, res) => {
  const products = await Collection.find({}).lean(); //[{},{},{}]
  let choosedProduct = [];
  products.forEach((p) =>
    p.children.filter((key) => {
      if (key.id == req.params.productId) {
        choosedProduct.push(key);
      }
    })
  );
  res.header({ "Access-Control-Allow-Origin": "*" });
  res.json(choosedProduct);
});

const port = 3002;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
