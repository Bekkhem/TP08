const express = require('express');
const cors = require('cors');
var bodyParser = require('body-parser');

const app = express();

// fron-end can acess our api
app.use(cors({
    // origin: ' http://localhost:3000/'
    origin: '*'
}))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

app.use(require('./routes'));

app.listen(3001, () => {
    console.log(' App running at: \n - local: http://localhost:3001/')
})