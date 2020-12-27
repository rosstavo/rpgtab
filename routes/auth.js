const router = require('express').Router();

router.post('/test', (req,res) => {
    res.send('Test')
});

module.exports = router;