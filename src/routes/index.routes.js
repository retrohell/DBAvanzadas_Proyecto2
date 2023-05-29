const { Router } = require('express')
const router = Router();

const { renderIndex, renderAbout, renderSignIn, renderLogIn } = require('../controllers/index.controller')
router.get('/', renderIndex);

//router.get('/about', renderAbout);

router.get('/signin', renderSignIn);

router.get('/login', renderLogIn);

module.exports = router;