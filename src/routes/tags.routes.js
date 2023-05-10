const { Router } = require('express');
const router = Router();

const { 
    renderTagForm, 
    createNewTag, 
    renderTag, 
    renderEditTagForm, 
    updateTag, 
    deleteTag 
} = require('../controllers/tags.controller');

// Nuevo tags
router.get('/tags/add', renderTagForm);

router.post('/tags/new-tags', createNewTag);

// Mostrar todos los tags
router.get('/tags', renderTag);

// Update (mostrar) tags
router.get('/tags/edit/:id', renderEditTagForm);

// Update (actualización) tags
router.put('/tags/edit/:id', updateTag);

// Borrar tags
router.delete('/tags/delete/:id', deleteTag);


module.exports = router