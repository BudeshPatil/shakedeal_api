const express = require('express')
const router  = express.Router()
const usercontoller = require('../controller/user-controller');

router.post('/adduser',usercontoller.adduser);

module.exports = router;
