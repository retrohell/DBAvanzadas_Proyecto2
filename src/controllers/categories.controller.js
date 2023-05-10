const categoriesController = {};
const Categorie = require('../models/Categories');

categoriesController.renderCategorieForm = (req, res) => {
    res.render('categories/new-categories');
};

categoriesController.createNewCategorie = async (req, res) => {
    const { name, url } = req.body;
    const newCategorie = new Categorie({name, url});
    await newCategorie.save();
    res.redirect('/categorie')
}

categoriesController.renderCategorie = async (req, res) => {
    const categories = await Categorie.find({}).lean();
    res.render('categories/all-categories', { categories });
}

categoriesController.renderEditCategorieForm = async (req, res) => {
    const categorie = await Categorie.findById(req.params.id);
    res.render('categories/edit-categories', { categorie })
}

categoriesController.updateCategorie = async (req, res) => {
    const { name, url } = req.body;
    await Categorie.findByIdAndUpdate(req.params.id, {name, url})
    res.redirect('/categories')
}

categoriesController.deleteCategorie = async (req, res) => {
    await Categorie.findByIdAndRemove(req.params.id);
    res.redirect('/categories')
}

module.exports = categoriesController;