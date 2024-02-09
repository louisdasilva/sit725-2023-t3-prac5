let collection = require('../models/ferrari');

const postFerrari = (req,res) => {
    let ferrari = req.body;
    collection.postFerrari(ferrari, (err,result) => {
        if (!err) {
            res.json({statusCode:201,data:result,message:'success'});
        }
    });
}

const getAllFerraris = (req,res) => {
    collection.getAllFerraris((error,result)=>{
        if (!error) {
            res.json({statusCode:200,data:result,message:'success'});
        }
    });
}

const deleteFerrari = (req,res) => {
    let ferrari = req.body;
    collection.deleteOne(ferrari, (err,result) => {
        if (!err) {
            res.json({statusCode:201,data:result,message:'success'});
        }
    });
}

module.exports = {postFerrari,getAllFerraris}