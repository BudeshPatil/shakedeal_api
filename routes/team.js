const express = require('express')
const router  = express.Router()

const teamObj = require('../controllers/team-controller');

router.post('/saveteam',teamObj.saveteam);
router.get('/getallteams',teamObj.getallteams);

router.post('/savetask',teamObj.savetask);
router.get('/getalltask',teamObj.getalltasks);

module.exports = router;