const mongoose = require("mongoose");
const { Objectid } = mongoose.Schema
const ProductSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32
        },
        description: {
            type: String,
            required: true,
            maxlength: 32
        },
        price: {
            type: String,
            ref: 'category',
            required: true,
        },
        category: {
            type: Objectid,
            trim: true,
            required: true,
            maxlength: 32
        },
        quantity: {
            type: Number,

            required: true,
            maxlength: 10
        },
        photo: {
            data: Buffer,
            ContentType: String,
            required: true,
        },
        shipping: {
            type: Boolean,
            required: false
        },
    },
    { timestamps: true }
);
module.exports = mongoose.model("Product", ProductSchema);
