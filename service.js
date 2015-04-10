var crudService = require('crud-service')
  , createSchema = require('./schema')

module.exports = function (serviceLocator) {

  var save = serviceLocator.persistence('tier')
    , schema = createSchema(save)
    , service = crudService('Tier', save, schema, {})

  function getDefaultTiers(action, cb) {
    // Always convert action to array
    if (!Array.isArray(action)) action = [ action ]

    service.find({ defaultActions: { $in: action } }, { fields: [ '_id' ] }, function (err, tiers) {
      if (err) return cb(err)
      return cb(null, tiers.map(function (t) { return t._id }))
    })
  }

  service.getDefaultTiers = getDefaultTiers

  return service
}
