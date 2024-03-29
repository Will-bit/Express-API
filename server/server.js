const express = require('express');
const cors = require('cors');
const apiRouter = require('./routes');
const path = require('path');

let app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client'))) // assessing the index

app.use('/api', apiRouter);

app.listen(5000);