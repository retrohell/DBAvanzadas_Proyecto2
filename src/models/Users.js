const {Schema, model} = require('mongoose');
const bcrypt = require('bcryptjs');

const UsersSchema = new Schema({
    name : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

UsersSchema.methods.encrypPassword = async password => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}
UsersSchema.methods.matchPassword = async function(password){
    return await bcrypt.compare(password, this.password);
}
module.exports = model('Users', UsersSchema, 'users');