const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const username = req.cookies.username;
    if( username ){
        res.send('Hello, '+username);
    }else{
        res.redirect('/trackName');
    }
    
});

module.exports = router;

