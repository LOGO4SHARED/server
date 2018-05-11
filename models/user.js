const mongoose = require('mongoose')
const Schema = mongoose.Schema

let validateEmail = function (email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email)
}

const UserSchema = Schema ({
  name : String,
  email : {
    type : String,
    require : [true, 'Email required'],
    unique : [true, 'Email already exist'],
    validate : [validateEmail, 'Email not valid']
  },
  password : {
    type : String,
    require : [true, 'Password required']
  }
}, {
  timestamps: true
})

UserSchema.post('save', function(error, doc, next) {
  if (error.name === 'MongoError' && error.code === 11000) {
    next(new Error('There was a duplicate key error'));
  } else {
    next(error);
  }
});


let User = mongoose.model('user',UserSchema);

module.exports = User;
