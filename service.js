var crudService = require('crud-service')
  , createSchema = require('./schema')

module.exports = function (serviceLocator) {

  var save = serviceLocator.persistence('tier')
    , schema = createSchema(save)
    , service = crudService('Tier', save, schema, {})

  function getDefaultTiers(action, cb) {
    service.find({ defaultActions: action }, cb)
  }

  service.getDefaultTiers = getDefaultTiers

  return service
}
