const express = require('express');
const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

router.get('/test-you', function (req, res) {
    res.send('my second api')
});

module.exports = router;