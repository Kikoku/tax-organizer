import mongoose, {Schema} from 'mongoose';
//import bcrypt from 'bcrypt';
import Bluebird from 'bluebird';
import md5 from 'md5';
import timestamps from 'mongoose-timestamp';

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    require: true,
    lowercase: true
  },
  password: String,
  name: {type: String, default: ''}
});

// userSchema.pre('save', function(next) {
//   let user = this;
//   if(!user.isModified('password')) {
//     return next();
//   }
//   this.has_password = true;
//   bcrypt.genSalt(5, function(err, salt) {
//     if(err) return next(err);
//     bcrypt.hash(user.password, salt, function(err, hash) {
//       if(err) return next(err);
//       user.password = hash;
//       next();
//     });
//   });
// });

userSchema.methods = {
  comparePassword: function(input, cb) {

    if(!input) {

      return cb({
        msg: 'Invalid login credentials'
      })

    }

    if(input == this.password) {

      cb(null, true)

    } else {

      return cb({
        msg: 'Invalid login credentials'
      })

    }
  }
}

userSchema.plugin(timestamps, {
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

userSchema.methods.toJSON = function() {
  var obj = this.toObject()
  delete obj.password
  return obj
}

const User = mongoose.model('User', userSchema);

Bluebird.promisifyAll(User);
Bluebird.promisifyAll(User.prototype);

export default User;
