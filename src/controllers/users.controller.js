const usersController = {};

usersController.renderUserForm = (req, res) => {
    res.send('Usuario Añadido');
};

usersController.createNewUser = (req, res) => {
    res.send('Nuevo Usuario')
}

usersController.renderUser = (req, res) => {
    res.send('Render Usuario')
}

usersController.renderEditUserForm = (req, res) => {
    res.send('Usuario Editado')
}

usersController.updateUser = (req, res) => {
    res.send('Usuario Actualizado')
}

usersController.deleteUser = (req, res) => {
    res.send('Usuario Eliminado')
}

module.exports = usersController;