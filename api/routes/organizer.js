import organizer from '../handlers/organizer';
import Joi from 'joi';
import {mongoIdSchema, newOrganizerSchema} from '../payloadSchemas';

const routes = [
  {
    method: 'POST',
    path: '/organizer/test/data',
    handler: organizer.testData,
    config: {

    }
  },{
    method: 'POST',
    path: '/organizer/test/data-remove',
    handler: organizer.testDataRemove,
    config: {

    }
  },{
    method: 'GET',
    path: '/organizer',
    handler: organizer.list,
    config: {

    }
  },{
    method: 'POST',
    path: '/organizer',
    handler: organizer.new,
    config: {
      validate: {
        payload: newOrganizerSchema
      }
    }
  },{
    method: 'GET',
    path: '/organizer/{id}',
    handler: organizer.show,
    config: {
      validate: {
        params: mongoIdSchema
      }
    }
  }
];

export default routes;
