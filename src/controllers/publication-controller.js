const Publication = require('../models/publication');
const mongoose = require('mongoose');

const createPublication = async (req, res) => {
    const {title, description, url, thubnailUrl, public_id, urlLocalAndroid} = req.body;
    const publication = new Publication({
        title,
        description,
        metadata: {
            url,
            thubnailUrl,
            public_id,
            urlLocalAndroid
        }
    });
    const publicationSave = await publication.save();
    return res.status(200).send({publication: publicationSave});

};

const updatePublication = async (req, res) => {
    const id = mongoose.Types.ObjectId(req.params.id);
    const publication = await Publication.findOne({_id: id});

    if (!publication) {
        return res.status(404).send({ message: `El id ${id} no se existe` });
    }
    const {title, description} = req.body;
    publication.title = title;
    publication.description = description;

    const publicationSave = await publication.save();
    return res.status(200).send({publication: publicationSave});
};

const findAllPublications = async (req, res) => {
    const publications = await Publication.find({});
    return res.status(200).send({ publications });
};

const findPublicationById = async (req, res) => {
    const id = mongoose.Types.ObjectId(req.params.id);
    const publication = await Publication.findOne({_id: id});

    if (!publication) {
        return res.status(404).send({ message: `El id ${id} no se existe` });
    }
    return res.status(200).send({ publication });
};

const deletePublication = async (req, res) => {
    const id = mongoose.Types.ObjectId(req.params.id);
    const publication = await Publication.findOne({_id: id});

    if (!publication) {
        return res.status(404).send({ message: `El id ${id} no se existe` });
    }
    await Publication.remove({_id: id});
    return res.status(200).send({ publication });
}

module.exports = {
    createPublication,
    findAllPublications,
    findPublicationById,
    updatePublication,
    deletePublication
}