let client = require('../dbConnection');

let collection = client.db().collection('Ferraris');

function postFerrari(ferrari, callback) {
    collection.insertOne(ferrari,callback);
}

function getAllFerraris(callback) {
    collection.find({}).toArray(callback);
}

module.exports = {postFerrari,getAllFerraris}