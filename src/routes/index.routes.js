const { Router } = require('express')
const router = Router();

const { renderIndex, renderArticles, renderSignIn, renderLogIn } = require('../controllers/index.controller')
router.get('/', renderIndex);

//router.get('/articles', renderArticles);

router.get('/signin', renderSignIn);

router.get('/login', renderLogIn);

module.exports = router;