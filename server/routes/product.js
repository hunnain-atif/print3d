const express = require('express');
const router = express.Router();
const { User } = require("../models/User");

const { auth } = require("../middleware/auth");

//=================================
//             Product
//=================================

router.post("/uploadImage", auth, (req, res) => {
    
});


module.exports = router;
