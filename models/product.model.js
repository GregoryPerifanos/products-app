const mongoose = require('mongoose')

const Schema= mongoose.Schema

let productsSchema = new Schema({
    product: { type: String, require: true},
    cost:{type: Number, require: true},
    description: {type: String, required: true},
    quantity: {type: Number, required: true}
},{
    collation: 'products',
    timestamps: true
});

module.exports = mongoose.model('Products', productsSchema);