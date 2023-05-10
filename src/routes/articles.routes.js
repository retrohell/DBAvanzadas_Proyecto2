const { Router } = require('express');
const router = Router();

const { 
    renderArticleForm, 
    createNewArticle, 
    renderArticle, 
    renderEditArticleForm, 
    updateArticle, 
    deleteArticle 
} = require('../controllers/articles.controller');

// Nuevo articulo
router.get('/articles/add', renderArticleForm);

router.post('/articles/new-article', createNewArticle);

// Mostrar todos los articulos
router.get('/articles', renderArticle);

// Update (mostrar) articulos
router.get('/articles/edit/:id', renderEditArticleForm);

// Update (actualización) articulos
router.put('/articles/edit/:id', updateArticle);

// Borrar articulos
router.delete('/articles/delete/:id', deleteArticle);


module.exports = router