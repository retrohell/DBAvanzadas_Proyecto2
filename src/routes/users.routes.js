const { Router } = require('express');
const router = Router();

const { 
    renderUserForm, 
    createNewUser, 
    renderUser, 
    renderEditUserForm, 
    updateUser, 
    deleteUser,
    renderSignInForm,
    renderSignUpForm,
    signin,
    signup,
    logout, 
} = require('../controllers/users.controller');

router.get('/users/signup', renderSignUpForm);

router.post('/users/signup', signup);

router.get('/users/signin', renderSignInForm);

router.post('/users/sigin', signin);

router.get('/users/logout', logout);


// Nuevo Users
// router.get('/users/add', renderUserForm);

// router.post('/users/add', createNewUser);

// Mostrar todos los Users
router.get('/users/users', renderUser);

// Update (mostrar) Users
// router.get('/users/edit/:id', renderEditUserForm);

// Update (actualización) Users
// router.put('/users/edit/:id', updateUser);

// Borrar Users
// router.delete('/users/delete/:id', deleteUser);


module.exports = router