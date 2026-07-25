const mongoose = require("mongoose");

const productSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 2
    },

    description: {
        type: String,
        trim: true,
        default: ""
    },

    category: {
        type: String,
        required: true,
        trim: true
    },

    costPrice: {
        type: Number,
        required: true,
        min: 0
    },

    salePrice: {
        type: Number,
        required: true,
        min: 0
    },

    stock: {
        type: Number,
        required: true,
        min: 0,
        default: 0
    },

    active: {
        type: Boolean,
         default: true
    },

    }, {
        timestamps: true
});

    const Product = mongoose.model("Product", productSchema);
    module.exports = Product;


