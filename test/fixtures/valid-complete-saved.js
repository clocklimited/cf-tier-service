var extend = require('lodash.assign')
  , validNew = require('./valid-complete')

module.exports = function () {
  return extend({}, validNew(), { _id: 1 })
}
