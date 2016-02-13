import Boom from 'boom';
import config from '../config';
import Organizer from '../models/Organizer';

export default {
  testData: (request, reply) => {

    let organizer = new Organizer ({
      name: 'test organzier',
      sections: [{
          name: 'test section',
          number: 1,
          questions: [{
              name: 'one',
              number: 1,
              inputType: 'text'
            },{
              name: 'two',
              number: 2,
              inputType: 'text'
            }
          ]
        },{
          name: 'test section 2',
          number: 2,
          questions: {
            name: 'three',
            number: 1,
            inputType: 'checkbox',
            options: [{
                name: 'one',
                number: 1
              },{
                name: 'two',
                number: 2
              }
            ]
          }
        }
      ]
    });

    organizer.save((err, organizer) => {
      reply(organizer);
    });

  },
  testDataRemove: (request, reply) => {

    Organizer.remove({name:'test organzier'})
    .exec((err, organzier) => {

      if(err) return reply(err);

      reply('Removed organizers');

    })

  },
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
  }
}
