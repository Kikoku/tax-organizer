/**
 * config
 *
 * WARNING: Do not put sensitive information in this. Some of these values are imported into client side code
 * which bundles into the main file, thus making it ACCESSIBLE TO END USERS.
 *
 * @type {Object}
 */
const environment = {
  development: {

  },
  production: {

  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 3000,
  api: '/api',
  app: {
    title: 'tax-organizer',
    meta: {
      charSet: 'utf-8',
      description: 'gather and organier tax information',
      name: {
        viewport: 'width=device-width, initial-scale=1.0'
      }
    }
  },

}, environment);
