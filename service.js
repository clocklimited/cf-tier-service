var crudService = require('crud-service')
  , createSchema = require('./schema')

module.exports = function (serviceLocator) {

  var save = serviceLocator.persistence('tier')
    , schema = createSchema(save)
    , service = crudService('Tier', save, schema, {})

  return service
}
