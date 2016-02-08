import Hapi from 'hapi';
import jwt from 'hapi-auth-jwt2';
import hqs from 'hapi-qs';
import Inert from 'inert';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {RoutingContext, match} from 'react-router';
import {Provider} from 'react-redux';
import createRoutes from './routes';
import configureStore from './store/configureStore';
import config from './config';
import apiConfig from '../api/config';
import Html from './Html';
import api from '../api';

export default function(callback) {

  const server = new Hapi.Server();

  server.connection({
    port: process.env.PORT || 3000,
    labels: ['api']
  });

  server.connections[0].name = 'API';

  server.register([
    {
      register: Inert
    },
    {
      register: hqs
    },
    {
      register: jwt
    },
    {
      register: api,
      routes: {
        prefix: apiConfig.api.routes.path
      }
    }
  ], (err) => {
    if(err) {
      console.error('ERROR:', err)
      throw err;
    }

    /**
     * Attempt to serve static requests from the public folder.
     */
    server.route({
      method: 'GET',
      path: '/{param*}',
      handler: {
        directory: {
          path: 'static'
        }
      }
    });

    server.ext('onPreResponse', (request, reply) => {

      if (typeof request.response.statusCode !== 'undefined' || request.path.includes(apiConfig.api.routes.path)) {
        return reply.continue();
      }

      if(__DEVELOPMENT__) {
        webpackIsomorphicTools.refresh();
      }

      const store = configureStore();
      matchRoutes(store);

      // this gets called if server side rendering/routing has problems and errors
      function hydrateOnClient() {
        reply('<!doctype html>\n' +
          renderToString(<Html assets={webpackIsomorphicTools.assets()} store={store} />)
        ).code(500);
      }

      function matchRoutes(store) {

        const routes = createRoutes(store);

        match({ routes, location: request.path }, (error, redirectLocation, renderProps) => {

          if (redirectLocation) {

            reply.redirect(redirectLocation.pathname + redirectLocation.search);

          } else if (error) {

            console.error('ROUTER ERROR:', error);
            hydrateOnClient();

          } else if (!renderProps) {

            hydrateOnClient();

          } else {

            const component = (
              <Provider store={store}>
                <RoutingContext {...renderProps} />
              </Provider>
            );

            reply('<!doctype html>\n' +
              renderToString(<Html assets={webpackIsomorphicTools.assets()} component={component} store={store} />)
            );

          }
        });
      }
    });
  });

  return server.start(() => callback(server));
}
