import Boom from 'boom';
import config from '../config';
import Organizer from '../models/Organizer';

export default {
  list: (request, reply) => {
    Organizer.find()
    .exec((err, organizers) => {

      if(err) return reply(err);

      reply(organizers);
    })
  },
  show: (request, reply) => {

    Organizer.findById(request.params.id)
    .exec((err, organizer) => {

      if(err) return reply(err);

      reply(organizer);
    })
  },
  new: (request, reply) => {

    const {name} = request.payload;

    const organizer = new Organizer({
      name,
      sections: []
    });

    organizer.save((err, organizer) => {

      if(err) return reply(err);

      reply(organizer);
    })
  },
  delete: (request, reply) => {
    Organizer.findById(request.params.id)
    .exec((err, organizer) => {

      if(err) return reply(err);

      organizer.remove();

      reply(organizer).code(200);
    })
  }
}
