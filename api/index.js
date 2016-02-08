import mongoose from 'mongoose';
import config from './config';
import routes from './routes';
import {validateUser} from './helpers';

// TODO: this should really just crash if mongoose cannot connect.
// Perhaps turn it into a callback that will run the API one connected.

const register = (server, options, next) => {

  mongoose.connect(config.db, function(err) {
    if(err) {
      console.error(err);
    }
  });

  server.select('api').route(routes);

  next();

};

register.attributes = {
  name: config.api.name,
  version: config.api.version
};

export default register;
