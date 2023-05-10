const {Schema, model} = require('mongoose');

const ArticleSchema = new Schema({
    tittle : {
        type: String,
        required: true
    },
    date : {
        type: Date,
        required: true
    },
    text : {
        type: String,
        required: true
    },
    categorie: {
        type: Array,
        required: true
    },
    comments: {
        type: Array,
        required: true
    },
    tags: {
        type: Array,
        required: true
    }
}, {
    timestamps: true
})

module.exports = model('Articles', ArticleSchema, 'articles');