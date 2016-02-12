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
  },
  {
    method: 'POST',
    path: '/auth/login',
    handler: auth.login,
    config: {
      validate: {
        payload: loginPayloadSchema
      }
    }
  }
];

export default routes;
