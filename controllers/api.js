const Product = require("../models/products");
const fs = require("fs");

module.exports = class API {
  //fetch all products
  static async fetchAllProducts(req, res) {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }

  //fetch product by id
  static async fetchProductByID(req, res) {
    const id = req.params.id;
    try {
      const product = await Product.findById(id);
      res.status(200).json(product);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }

  //fetch product
  // static async fetchProducts(req, res) {
  //   console.log("Inside controller api -", req);
  //   const id = req.params.id;
  //   let products = "";
  //   try {
  //     if (!!id) {
  //       products = await Product.findById(id);
  //     } else {
  //       products = await Product.find();
  //     }
  //     res.status(200).json(products);
  //   } catch (err) {
  //     res.status(404).json({ message: err.message });
  //   }
  // }

  //fetch products by title
  static async fetchAllProductsByTitle(req, res) {
    const productTitle = req.params.title;
    try {
      const products = await Product.find({ title: productTitle });
      res.status(200).json(products);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }

  //create a product
  static async createProduct(req, res) {
    const product = req.body;
    const imagename = req.file.filename;
    product.image = imagename;
    try {
      await Product.create(product);
      res.status(201).json({ message: "Product created successfully!" });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  //update a product
  static async updateProduct(req, res) {
    const id = req.params.id;

    let new_image = "";
    if (req.file) {
      new_image = req.file.filename;
      try {
        fs.unlinkSync("./uploads/" + req.body.old_image);
      } catch (err) {
        console.log(err);
      }
    } else {
      new_image = req.body.old_image;
    }
    const newProduct = req.body;
    newProduct.image = new_image;

    try {
      await Product.findByIdAndUpdate(id, newProduct);
      res.status(200).json({ message: "Product Updated Successfully!" });
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }

  static async deleteProduct(req, res) {
    const id = req.params.id;
    try {
      const result = await Product.findByIdAndDelete(id);
      if (result.image != "") {
        try {
          fs.unlinkSync("./uploads/" + result.image);
        } catch (error) {
          console.log(error);
        }
      }
      res.status(200).json({ message: "Product deleted Successfully!" });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
};
