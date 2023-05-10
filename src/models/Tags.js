const {Schema, model} = require('mongoose');

const TagsSchema = new Schema({
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

module.exports = model('Tags', TagsSchema, 'tags');