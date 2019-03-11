const express = require('express');
const app = express();
app.use(express.json());
const fileDb = require('./fileDb');
const port = 8000;

const messages = require('./app/messages');
app.use('/messages', messages);

app.listen(port, () => {
    console.log('Server started on ${port} port')
});