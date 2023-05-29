const articlesController = {};
const Article = require('../models/Articles');

articlesController.renderArticleForm = (req, res) => {
    res.render('articles/new-article');
};

articlesController.createNewArticle = async (req, res) => {
    const { tittle, date, description, categorie, tags } = req.body;
    const newArticle = new Article({tittle, date, 
        description, categorie, tags, });
    await newArticle.save();
    req.flash('success_msg', 'Articulo Agregado Correctamente')
    res.redirect('/articles');
};

articlesController.renderArticle = async (req, res) => {
    const articles = await Article.find({}).lean();
    res.render('articles/all-article', { articles });
};

articlesController.renderEditArticleForm = async (req, res) => {
    const article = await Article.findById(req.params.id);
    res.render('articles/edit-article', { article });
}

articlesController.updateArticle = async (req, res) => {
    const { tittle, date, description, categorie, tags } = req.body;
    await Article.findByIdAndUpdate(req.params.id, {tittle, date, description, categorie, tags})
    req.flash('success_msg', 'Articulo Actualizado Correctamente');
    res.redirect('/articles');
}

articlesController.deleteArticle = async (req, res) => {
    await Article.findByIdAndRemove(req.params.id);
    req.flash('success_msg', 'Articulo Eliminado Correctamente');
    res.redirect('/articles');
}

module.exports = articlesController;
