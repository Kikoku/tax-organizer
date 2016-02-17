import Joi from 'joi';

export const mongoIdSchema = {
  id: Joi.string().regex(/^[0-9a-fA-F]{24}$/)
}

export const signupPayloadSchema = {
  email: Joi.string().trim().required(),
  password: Joi.string().required().min(8),
  name: Joi.string().trim().required()
}

export const loginPayloadSchema = {
  email: Joi.string().trim().required(),
  password: Joi.string().required()
}
