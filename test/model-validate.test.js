var schema = require('../schema')()
  , fixtures = require('./fixtures')
  , deepEqual = require('assert-diff').deepEqual

describe('tier model validation', function () {
  it('should report correct default validation set for empty data', function (done) {
    schema.validate({}, function (error, errors) {
      deepEqual(errors, fixtures.createErrorResponse.errors)
      done()
    })
  })

  describe('resources', function () {
    it('should default to []', function () {
      deepEqual(schema.makeDefault().resources, [])
    })
  })

  describe('defaultActions', function () {
    it('should default to []', function () {
      deepEqual(schema.makeDefault().defaultActions, [])
    })
  })
})
