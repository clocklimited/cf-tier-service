module.exports.validNewModel = require('./valid-new')
module.exports.validFirstSavedModel = require('./valid-saved')

module.exports.completeValidModel = require('./valid-complete')
module.exports.completeModelResponseWithAllData = require('./valid-complete-saved')

module.exports.validPartialModel = { description: 'Updated description' }

module.exports.sortColumns =
  { sortColumn: '_id'
  , filterColumn: 'name'
  , filterValue: 'Tier name'
  }

module.exports.invalidModel = {}

module.exports.createErrorResponse =
  { errors:
    { name: 'Name is required'
    , description: 'Description is required'
    , resources: 'Resources is required'
    , account: 'Account is required'
    }
  }
