import mongoose, {Schema} from 'mongoose';
import Bluebird from 'bluebird';
import timestamps from 'mongoose-timestamp';

const organizerSchema = new Schema({
  name: {
    type: String,
    default: ''
  },
  creator:  {
    type: Schema.ObjectId,
    ref: 'User'
  },
  sections: [{
    name: String,
    number: Number,

    questions: [{
      name: String,
      number: Number,
      value: String,
      inputType: String,

      options: [{
        name: String,
        number: Number,
        value: String,
        _id: false
      }],

      _id: false
    }],

    _id: false
  }]
});

organizerSchema.methods = {

}

organizerSchema.plugin(timestamps, {
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

const Organizer = mongoose.model('Organizer', organizerSchema);

Bluebird.promisifyAll(Organizer);
Bluebird.promisifyAll(Organizer.prototype);

export default Organizer;
