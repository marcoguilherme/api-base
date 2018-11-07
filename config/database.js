const mongoose = require('mongoose');

exports.openDB = function(){
    var db = mongoose.connect(process.env.DB_LOCATION, { useNewUrlParser: true });
    return db;
}
