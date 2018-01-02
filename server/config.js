var mongoose = require("mongoose");
mongoose.Promise = global.Promise;

var db = mongoose.connect("mongodb://localhost:27017/MainApp");

db.then(() => {
    console.log('connected to the database')
},(err) => {
    console.log(`can't connect to the database: ${err}`)
})


module.exports = db;