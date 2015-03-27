module.exports = initService

function initService() {
  return { tierService: [ 'database', 'acl', init ] }
}

function init(serviceLocator, done) {
  serviceLocator.persistence.register('tier')
  serviceLocator.acl.addResource('tier', {
    actions: [ 'create', 'read', 'update', 'delete' ]
  })
  serviceLocator.register('tierService', require('./service')(serviceLocator))
  done()
}
