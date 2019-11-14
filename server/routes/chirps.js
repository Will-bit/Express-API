const express = require('express');
const store = require("../chirpStore");
//const chirpsStore = require('../chirpstore');

let router = express.Router(); 


router.get("/:id", (req, res)=>{
    let id = req.params.id;
    if (id){
        res.json(store.GetChirp(id));
    } else{
        res.send(store.GetChirps());
    }
});
/*
router.get('/', (req, res)=>{
    res.send('hello!');
});
do
router.post('/', (req, res)=>{
    console.log('posted');
});
*/
module.exports = router;