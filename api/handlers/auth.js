import Boom from 'boom';
import config from '../config';
import User from '../models/User';
import jwt from 'jwt-simple';

export default {

  signup: (request, reply) => {

    const {email, password, name} = request.payload;

    User.findOne({email: email.toLowerCase()})
    .exec((err, user) => {

      if(err) return reply(err)

      if(user && user.email === email.toLowerCase()) {
        return reply(Boom.badRequest('Email already in use'))
      }

      user = new User({
        email,
        password,
        name
      });

      user.save((err, user) => {

        if(err) return reply(err);

        const token = jwt.encode({id: user.id}, config.server.auth.secret);

        reply({user, token});

      });

    })

  }

}
