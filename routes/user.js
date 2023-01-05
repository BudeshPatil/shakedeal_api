const express = require('express')
const router  = express.Router()

const customerObj = require('../controllers/user-controller');

router.get('/adminuserview',customerObj.getallusers);
router.post('/saveuser',customerObj.saveUser);
module.exports = router;