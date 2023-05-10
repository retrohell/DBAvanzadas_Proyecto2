const { Router } = require('express');
const router = Router();

const { 
    renderCategorieForm, 
    createNewCategorie, 
    renderCategorie, 
    renderEditCategorieForm, 
    updateCategorie, 
    deleteCategorie 
} = require('../controllers/categories.controller');

// Nuevo categories
router.get('/categories/add', renderCategorieForm);

router.post('/categories/new-categories', createNewCategorie);

// Mostrar todos los categories
router.get('/categories', renderCategorie);

// Update (mostrar) categories
router.get('/categories/edit/:id', renderEditCategorieForm);

// Update (actualización) categories
router.put('/categories/edit/:id', updateCategorie);

// Borrar categories
router.delete('/categories/delete/:id', deleteCategorie);


module.exports = router