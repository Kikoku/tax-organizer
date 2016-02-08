const environment = {
  development: {
    db: 'mongodb://localhost/default',
  },
  production: {
    db: 'mongodb://localhost/default',
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  server: {
    auth: {
      scheme: 'jwt',
      strategy: 'jwt',
      // Never Share your secret key
      // Generate your own key at: https://www.grc.com/passwords.htm
      secret: 'secret',
      // Pick a strong algorithm
      algorithms: 'HS256'
    }
  },
  api: {
    name: 'api',
    routes: {
      path: '/api'
    },
    version: '0.0.1',
    swagger: {
      documentationPath: '/api/documentation',
      endpoint: '/api/docs'
    }
  },

}, environment);
