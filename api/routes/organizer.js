import organizer from '../handlers/organizer';
import Joi from 'joi';

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
  }
];

export default routes;
