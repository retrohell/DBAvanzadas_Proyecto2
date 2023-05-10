const {Schema, model} = require('mongoose');

const CategorieSchema = new Schema({
    name : {
        type: String,
        required: true
    },
    url : {
        type: String,
        required: true
    },
}, {
    timestamps: true
})

module.exports = model('Categories', CategorieSchema, 'categories');