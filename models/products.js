const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  Id: {
    type: mongoose.Schema.ObjectId,
  },
  title: String,
  category: String,
  image: String,
  stock: String,
  discount: Number,
  cost: Number,
  prev_cost: Number,
  ratings: Number,
  location: String,
  choice: {
    seller_name: String,
    distance: Number,
  },
});

module.exports = mongoose.model("Product", productSchema);
