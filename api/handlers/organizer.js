import Boom from 'boom';
import config from '../config';
import Organizer from '../models/Organizer';

export default {
  testData: (request, reply) => {

    let organizer = new Organizer ({
      name: 'test organzier',
      sections: [{
          name: 'section one',
          number: 1,
          questions: [{
              name: 'question one',
              number: 1,
              inputType: 'text'
            },{
              name: 'question two',
              number: 2,
              inputType: 'text'
            }
          ]
        },{
          name: 'section two',
          number: 2,
          questions: {
            name: 's2 q1',
            number: 1,
            inputType: 'checkbox',
            options: [{
                name: 'option 1',
                number: 1
              },{
                name: 'option 2',
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
