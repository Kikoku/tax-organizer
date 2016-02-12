import Joi from 'joi';

export const mongoIdSchema = Joi.string().regex(/^[0-9a-fA-F]{24}$/);

export const signupPayloadSchema = {
  email: Joi.string().trim().required(),
  password: Joi.string().required(),
  name: Joi.string().trim().required()
}
