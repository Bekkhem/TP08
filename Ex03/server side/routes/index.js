const express = require('express');
const { login } = require('../services/login');
const { register } = require('../services/register');
const router = express.Router();


router.post('/login', function(req, res) {
    const { email, password } = req.body;
    const result = login(email, password);
    res.json(result);

})

router.post('/register', function(req, res) {
    const result = register(req.body);
    res.json(result);

})

module.exports = router;