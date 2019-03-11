const express = require('express');
const router = express.Router();

const fileDb = require('../fileDb');

router.get('/', (req, res) => {
    const lastMessages = fileDb.getItems();
    res.send(lastMessages)
});

router.post('/', (req, res) => {
    const dateTime = fileDb.saveItem(req.body);
    req.body['dateTime'] = dateTime;
    res.send(req.body);
});

router.get('/:id', (req, res) => {
    res.send('Single product')
});

module.exports = router;