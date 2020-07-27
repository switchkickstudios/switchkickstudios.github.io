const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/join-band', function (req, res, next) {
    res.render('../partials/spread/joinBand', {
        invitationCode: req.query.invitationCode
    });
});

module.exports = router;
