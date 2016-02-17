import Boom from 'boom';
import config from '../config';
import Organizer from '../models/Organizer';

export default {
  testData: (request, reply) => {

    let organizer = new Organizer ({
      name: 'test organzier mid',
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
                name: 'check 1',
                value: 'options 1',
                number: 1
              },{
                name: 'check 2',
                value: 'options 1',
                number: 2
              }
            ]
          }
        },{
          name: 'section three',
          number: 3,
          questions: {
            name: 's3 q1',
            number: 1,
            inputType: 'select',
            options: [{
                name: 'select 1',
                value: 'options 1',
                number: 1
              },{
                name: 'select 2',
                value: 'options 1',
                number: 2
              }
            ]
          }
        },{
          name: 'section four',
          number: 4,
          questions: {
            name: 's4 q1',
            number: 1,
            inputType: 'radio',
            options: [{
                name: 'radio 1',
                value: 'options 1',
                number: 1
              },{
                name: 'radio 2',
                value: 'options 1',
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

    Organizer.remove({name:'test organzier mid'})
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
