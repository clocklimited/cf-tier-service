var extend = require('lodash.assign')
  , validNew = require('./valid-new')

module.exports = function () {
  return extend({}, validNew(), { _id: 1 })
}
