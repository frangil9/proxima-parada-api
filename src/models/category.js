const { Schema, model } = require('mongoose');

const CategoryShema = new Schema({
    name: String,
    description: String
});

module.exports = model('Category', CategoryShema);