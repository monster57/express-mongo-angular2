var mongoose = require('mongoose');  
var userSchema = new mongoose.Schema({  
  name: String,
  age: Number,
  weight: Number,
});
module.exports = mongoose.model('User', userSchema);

