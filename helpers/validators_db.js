const Role = require('../models/role');
const User = require('../models/user');
const Category = require('../models/category');

const validateRole = async(role = '') => {
    const exist = await Role.findOne({ name:role });
    if(!exist){
        throw new Error('El rol no es valido en la base de datos');
    }
}

const emailExist = async(email = '') => {
    const exist = await User.findOne({ email });
    if(exist){
        throw new Error('El correo ya esta registrado');
    }
}

const userExistById = async(id = '') => {
    const exist = await User.findById(id);
    if(!exist){
        throw new Error('No existe un usuario registrado');
    }
}

const categoryExistById = async(id = '') => {
    const exist = await Category.findById(id);
    if(!exist){
        throw new Error('No existe una categoria registrada');
    }
}


module.exports = { validateRole, emailExist, userExistById, categoryExistById };