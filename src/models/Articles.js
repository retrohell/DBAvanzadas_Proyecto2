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
    description : {
        type: String,
        required: true
    },
    categorie: {
        type: String,
        required: true
    },
    tags: {
        type: Array,
        required: true
    },
}, {
    timestamps: true
})

module.exports = model('Articles', ArticleSchema, 'articles');