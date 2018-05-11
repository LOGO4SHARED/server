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


let User = mongoose.model('User',UserSchema);

module.exports = User;