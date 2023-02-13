const mongoose = require('mongoose');
const UserSchema = new Schema({
    
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true,
        unique: true
    },
    tag:{
        type: String,
        required: true
    },
    date:{
        type: date,
        default: Date.now
    },
    
  });

  module.exports = mongoose.model('user', UserSchema);