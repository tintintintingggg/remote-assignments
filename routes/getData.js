const express = require('express');
const router = express.Router();

function add(num){
    var sum = 0;
    for(var i = 0 ; i<=num ; i++){
        sum += i;
    }
    return sum;
}

router.get('/', (req, res) => {
    const { number } = req.query;
    var result = add(number);
    var text = result.toString();
    const button = '</br><a href="/">Back</a>';
    if( !number ){
        res.send('Lack of Parameter'+button);
    }else if( number>=0 ){
        res.send(text+button);
    }else{
        res.send('Wrong Parameter'+button);
    }
});

module.exports = router;



