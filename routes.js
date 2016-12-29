'use strict';

const express = require('express');
const router = express.Router();
const playlist = require('./playlist');

router.get('/', playlist.index);
router.post('/addsong', playlist.addsong);
router.get('/deletesong/:id', playlist.deletesong);

module.exports = router;
