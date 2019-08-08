const cloudinary = require('cloudinary');
const fs = require('fs-extra');

cloudinary.config({
    cloud_name: 'dskfedp5z',
    api_key: '648216717583523',
    api_secret: 'euqUNnd1MgfQkwzgQQdLBL0TdeQ'
});

async function upload(req, res) {
    const result = await cloudinary.v2.uploader.upload(req.file.path, { resource_type: "video" });
    console.log(result);
    await fs.unlink(req.file.path);
    res.status(200).send({
        image_url: result.url,
    });
}

module.exports = upload;