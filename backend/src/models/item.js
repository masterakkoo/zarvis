const mongoose = require("mongoose");
const items = new mongoose.Schema({
    category: String,
    company: String,
    model_name: String,
    discount: Number,
    discription: String,
    availibilty: Boolean,
    options: [{
        varient: String,
        price: Number
    }],
    images: [String]
})

const Item = new mongoose.model("Item", items);

module.exports = Item;