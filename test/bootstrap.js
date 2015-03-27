var logger = require('mc-logger')
  , acl = require('secure/access-control-list')(logger)
  , createPersistence = require('./memory-persistence-factory')

module.exports = function (serviceLocator) {
  serviceLocator
    .register('logger', logger)
    .register('config', {})
    .register('acl', acl)
    .register('persistence', createPersistence(serviceLocator))

  return serviceLocator
}
