import Boom from 'boom';
import config from '../config';
import Organizer from '../models/Organizer';

export default {
  testData: (request, reply) => {

    let organizer = new Organizer ({
      name: 'test organzier',
      sections: [{
          name: 'test section',
          number: 1
        },{
          name: 'test section 2',
          number: 2
        }
      ],
      options: [{
          name: 'one',
          number: 1
        },{
          name: 'two',
          number: 2
        }
      ],
      questions: [{
          name: 'one',
          number: 1,
          inputType: 'text'
        },{
          name: 'two',
          number: 2,
          inputType: 'text'
        },{
          name: 'three',
          number: 1,
          inputType: 'checkbox'
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

  }
}
