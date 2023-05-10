const {Schema, model} = require('mongoose');

const CommentSchema = new Schema({
    name : {
        type: String,
        required: true
    },
    url : {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = model('Comments', CommentSchema, 'comments');