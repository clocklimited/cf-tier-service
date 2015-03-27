var schema = require('../schema')()
  , fixtures = require('./fixtures')
  , assert = require('assert')

describe('tier model validation', function () {
  it('should report correct default validation set for empty data', function (done) {
    schema.validate({}, function (error, errors) {
      assert.deepEqual(errors, fixtures.createErrorResponse.errors)
      done()
    })
  })

  describe('resources', function () {
    it('should default to []', function () {
      assert.deepEqual(schema.makeDefault().resources, [])
    })
  })
})
