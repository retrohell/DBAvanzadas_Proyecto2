const {Schema, model} = require('mongoose');

const NoteSchema = new Schema({
    nombre : {
        type: String,
        required: true
    },
    usuario : {
        type: String,
        required: true
    },
}, {
    timestamps: true
})

module.exports = model('Note', NoteSchema);