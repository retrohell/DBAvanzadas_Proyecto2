const {Schema, model} = require('mongoose');

const UsersSchema = new Schema({
    name : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true
    },
}, {
    timestamps: true
})

module.exports = model('Users', UsersSchema, 'users');