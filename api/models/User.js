import mongoose, {Schema} from 'mongoose';
import Bluebird from 'bluebird';
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
