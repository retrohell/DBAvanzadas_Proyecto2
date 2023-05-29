const usersController = {};
const User = require('../models/Users');
const passport = require('passport');

usersController.renderSignUpForm = (req, res) => {
    res.render('users/signup');
}

usersController.signup = async (req, res) => {
    const errors = [];
    const {name, email, password, confirm_password} = req.body;
    if(password != confirm_password){
        errors.push({text: 'La contraseña no coincide'})
    }
    if(password.length > 4){
        errors.push({text: 'Contraseñas de mas de cuatro caracteres'})
    }
    if(password.length < 0){
        res.render('users/signup', {
            errors,
            name,
            email
        });
    } else {
        const emailUser = await User.findOne({email: email});
        if (emailUser){
            req.flash('error_msg', 'Email en uso');
            res.redirect('/users/signup');
        } else {
            const newUser = new User({name, email, password});
            newUser.password = await newUser.encryptPassword(password);
            await newUser.save();
            res.redirect('/users/signin')
        }
    }
}

usersController.renderSignInForm = (req, res) => {
    res.render('users/signin');
}

usersController.signin = passport.authenticate('local', {
    failureRedirect: '/users/signin',
    successRedirect: '/articles',
    failureFlash: true
} );

usersController.logout = (req, res) => {
    res.send('logout');
}

usersController.renderUserForm = (req, res) => {
    res.send('Usuario Añadido');
};

usersController.createNewUser = (req, res) => {
    res.send('Nuevo Usuario')
}

usersController.renderUser = (req, res) => {
    res.send('Render Usuario')
}

usersController.renderEditUserForm = (req, res) => {
    res.send('Usuario Editado')
}

usersController.updateUser = (req, res) => {
    res.send('Usuario Actualizado')
}

usersController.deleteUser = (req, res) => {
    res.send('Usuario Eliminado')
}

module.exports = usersController;