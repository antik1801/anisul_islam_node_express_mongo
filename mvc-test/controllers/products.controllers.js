const express = require("express")
const path = require("path")
const products = require("../models/products.model")

exports.getProducts = (req,res) =>{
    res.sendFile(path.join(__dirname + "/../views/products.html"))
}

exports.saveProducts = (req,res) =>{
    const name = req.body.name;
    const price = req.body.price;
    const product ={
        name,price
    }
    products.push(product)
    res.status(200).json({
        message: "Products added successfully",
        status: 200,
        products
    })
}