const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    var username = req.cookies.username;
    const { name } = req.query;
    if( username ){
        res.redirect('/myName');
    }else{
        res.render('trackName');
    }
});

router.post('/', (req, res) => {
    res.cookie('username', req.body.username);
    res.redirect('/myName');
});

module.exports = router;