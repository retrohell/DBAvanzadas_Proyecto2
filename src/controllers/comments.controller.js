const commentsController = {};
const Comment = require('../models/Comments');

commentsController.renderCommentForm = (req, res) => {
    res.render('comments/new-comments');
};

commentsController.createNewComment = async (req, res) => {
    const { name, url } = req.body;
    const newComment = new Comment({name, url});
    await newComment.save();
    res.redirect('/comments')
}

commentsController.renderComment = async (req, res) => {
    const comments = await Comment.find({}).lean();
    res.render('comments/all-comments', { comments });
}

commentsController.renderEditCommentForm = async (req, res) => {
    const comment = await Comment.findById(req.params.id);
    res.render('comments/edit-comments', { comment })
}

commentsController.updateComment = async (req, res) => {
    const { name, url } = req.body;
    await Comment.findByIdAndUpdate(req.params.id, {name, url})
    res.redirect('/comments')
}

commentsController.deleteComment = async (req, res) => {
    await Comment.findByIdAndRemove(req.params.id);
    res.redirect('/comments')
}

module.exports = commentsController;