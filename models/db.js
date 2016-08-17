var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/user');
mongoose.Promise = global.Promise;
module.exports = mongoose;