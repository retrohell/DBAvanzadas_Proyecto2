const { Router } = require('express');
const router = Router();

const { 
    renderUserForm, 
    createNewUser, 
    renderUser, 
    renderEditUserForm, 
    updateUser, 
    deleteUser 
} = require('../controllers/users.controller');

// Nuevo Users
router.get('/users/add', renderUserForm);

router.post('/users/add', createNewUser);

// Mostrar todos los Users
router.get('/users', renderUser);

// Update (mostrar) Users
router.get('/users/edit/:id', renderEditUserForm);

// Update (actualización) Users
router.put('/users/edit/:id', updateUser);

// Borrar Users
router.delete('/users/delete/:id', deleteUser);


module.exports = router