const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/testdb1", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Collection = mongoose.model("collections", {});

// fetch products for the slider
app.get("/api/collections/all/:limit?", async (req, res) => {
  const data = await Collection.find({}).lean();
  const output = data.map((cat) => {
    return {
      category: cat.category,
      id: cat._id,
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
  const data = await Collection.findById(req.params.id);
  res.header({ "Access-Control-Allow-Origin": "*" });

  res.json(data);
});
app.get("/api/product/:categoryId/:productId", async (req, res) => {
  const data = await Collection.findById(req.params.categoryId).lean();
  const item = data.children.filter(
    (product) => product.id == req.params.productId
  );
  res.header({ "Access-Control-Allow-Origin": "*" });
  console.log(item);
  res.json(item);
});

const port = 3002;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
