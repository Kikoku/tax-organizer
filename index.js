require('babel-core/register') // babel registration (runtime transpilation for node)

global.__DEVELOPMENT__ = process.env.NODE_ENV !== 'production';
global.__SERVER__ = true;
global.__CLIENT__ = false;

var path = require('path');
var rootDir = path.resolve(__dirname);

// https://github.com/halt-hammerzeit/webpack-isomorphic-tools
var WebpackIsomorphicTools = require('webpack-isomorphic-tools');

global.webpackIsomorphicTools = new WebpackIsomorphicTools(require('./webpack-isomorphic-tools'))
  .development(__DEVELOPMENT__)
  .server(rootDir, function() {

    const server = require('./src/server');

    server(server => {
      for (var key of Object.keys(server.connections)) {
        console.info('==> 🌎 Hapi Production Server (' + server.connections[key].name + ') is listening on', server.connections[key].info.uri);
      }
    });

  });
