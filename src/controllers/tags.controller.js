const tagsController = {};
const Tag = require('../models/Tags');

tagsController.renderTagForm = (req, res) => {
    res.render('tags/new-tags');
};

tagsController.createNewTag = async (req, res) => {
    const { name, url } = req.body;
    const newTag = new Tag({name, url});
    await newTag.save();
    res.redirect('/tags')
}

tagsController.renderTag = async (req, res) => {
    const tags = await Tag.find({}).lean();
    res.render('tags/all-tag', { tags });
}

tagsController.renderEditTagForm = async (req, res) => {
    const tag = await Tag.findById(req.params.id);
    res.render('tags/edit-tag', { tag })
}

tagsController.updateTag = async (req, res) => {
    const { name, url } = req.body;
    await Tag.findByIdAndUpdate(req.params.id, {name, url})
    res.redirect('/tags')
}

tagsController.deleteTag = async (req, res) => {
    await Tag.findByIdAndRemove(req.params.id);
    res.redirect('/tags')
}

module.exports = tagsController;