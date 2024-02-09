let express = require('express');
let router = express.Router();
let controller = require('../controllers/controller');

router.post('/', function(req,res){
    controller.postFerrari(req,res);
});

router.get('/', (req,res)=>{
    controller.getAllFerraris(req,res);
});

router.delete('/', (req,res)=>{
    controller.getAllFerraris(req,res);
});

module.exports = router;