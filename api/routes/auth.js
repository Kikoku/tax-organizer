import auth from '../handlers/auth';
import Joi from 'joi';
import {loginPayloadSchema, signupPayloadSchema } from '../payloadSchemas';

const routes = [
  {
    method: 'POST',
    path: '/auth/signup',
    handler: auth.signup,
    config: {
      validate: {
        payload: signupPayloadSchema
      }
    }
  }
];

export default routes;
