const indexController = {};

indexController.renderIndex = (req, res) => {
    res.render('index')
}

indexController.renderArticles = (req, res) => {
    res.render('articles/all-article')
}

indexController.renderSignIn = (req, res) => {
    res.render('signin')
}

indexController.renderLogIn = (req, res) => {
    res.render('login')
}

module.exports = indexController;