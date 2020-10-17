const express = require('express');
const router = express.Router();
const { User } = require("../models/User");
const multer = require('multer')
const { auth } = require("../middleware/auth");
const { Product } = require("../models/Product");

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`)
    },
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname)
        if (ext !== '.jpg' || ext !== '.png') {
            return cb(res.status(400).end('only png and jpg formats are allowed'), false);
        }
        cb(null, true)
    }
})

var upload = multer({ storage: storage }).single("file")

//=================================
//             Product
//=================================

router.post("/uploadImage", auth, (req, res) => {
    upload(req, res, err => {
        if (err) {return res.json({ success: false, err })}
        return res.json({ success: true, image: res.req.file.path, fileName: res.req.file.filename })
    })

});

router.post("/uploadProduct", auth, (req, res) => {
    const product = new Product(req.body)

    product.save((err) => {
        if (err) return res.status(400).json({ success: false, err })
        return res.status(200).json({ success: true })
    })

});

router.post("/getProducts", auth, (req, res) => {
    Product.find()
    .exec((err, products) => {
        if (err) return res.status(400).json({ success: false, err })
        return res.status(200).json({ success: true, products })
    })
});

module.exports = router;
