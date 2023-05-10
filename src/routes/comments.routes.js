const { Router } = require('express');
const router = Router();

const { 
    renderCommentForm, 
    createNewComment, 
    renderComment, 
    renderEditCommentForm, 
    updateComment, 
    deleteComment 
} = require('../controllers/comments.controller');

// Nuevo comments
router.get('/comments/add', renderCommentForm);

router.post('/comments/new-comments', createNewComment);

// Mostrar todos los comments
router.get('/comments', renderComment);

// Update (mostrar) comments
router.get('/comments/edit/:id', renderEditCommentForm);

// Update (actualización) comments
router.put('/comments/edit/:id', updateComment);

// Borrar comments
router.delete('/comments/delete/:id', deleteComment);


module.exports = router