import organizer from '../handlers/organizer';
import Joi from 'joi';
import {mongoIdSchema, newOrganizerSchema} from '../payloadSchemas';

const routes = [
{
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
  },{
    method: 'DELETE',
    path: '/organizer/{id}',
    handler: organizer.delete,
    config: {
      validate: {
        params: mongoIdSchema
      }
    }
  },{
    method: 'PUT',
    path: '/organizer/{id}',
    handler: organizer.update
  }
];

export default routes;
