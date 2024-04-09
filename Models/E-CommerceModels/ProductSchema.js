const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    productName:{
        type:String,
        required:true
    },
    productDescription:{
     type:String,
     required:true
    },
    productPrice:{
        type:String,
        required:true
    },
    venderID:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Vender",
        required:true
    },
    stockQuantity:{
        type:String,
        required:true
    }

})

const Product =mongoose.model("PRODUCT",ProductSchema);

module.exports = Product;