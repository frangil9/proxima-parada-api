const { Schema, model } = require('mongoose');

const PublicationShema = new Schema({
    title: String,
    description: String,
    metadata: Object,
    created: { type: Date, default: Date.now() },
    active: { type: Boolean, default: true },
});

module.exports = model('Publication', PublicationShema);