import Boom from 'boom';
import config from '../config';
import User from '../models/User';
import jwt from 'jwt-simple';

export default {

  signup: (request, reply) => {

    const {email, password, name, role} = request.payload;

    User.findOne({email: email.toLowerCase()})
    .exec((err, user) => {

      if(err) return reply(err);

      if(user && user.email === email.toLowerCase()) {

        return reply(Boom.badRequest('Email already in use'));

      }

      user = new User({
        email,
        password,
        name,
        role
      });

      user.save((err, user) => {

        if(err) return reply(err);

        const token = jwt.encode({id: user.id}, config.server.auth.secret);

        reply({user, token});

      });

    })

  },
  login: (request, reply) => {
    const {email, password} = request.payload;

    User.findOne({email: email.toLowerCase()})
    .exec((err, user) => {

      if(err) return reply(err);

      if(!user) return reply(Boom.unauthorized('Invalid login credentials'));

      user.comparePassword(password, function(err, match) {

        if(err) return reply(err);

        if(!match) {

          return reply(Boom.unauthorized('Invalid login credentials'));

        } else {

          const token = jwt.encode({id: user.id}, config.server.auth.secret);

          reply({user, token});

        }
      });
    })
  },
  jwtLogin: (request, reply) => {
    const {token} = request.payload;
    const {id} = jwt.decode(token, config.server.auth.secret);

    User.findByIdAsync(id)
    .then(user => reply({user, token}))
    .catch(reply);
  }

}
