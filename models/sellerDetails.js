const mongoose = require("mongoose");

const sellerDetailSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  shopName: {
    type: String,
    required: true,
    Unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    Unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
    required: true,
  },
});

const SellerDetails = new mongoose.model("SellerDetails", sellerDetailSchema);
module.exports = SellerDetails;
