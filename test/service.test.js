var serviceLocator = require('service-locator')()
  , extend = require('lodash.assign')
  , assert = require('assert')
  , async = require('async')
  , createService = require('../init')().tierService.slice(-1)[0]
  , bootstrap = require('./bootstrap')
  , createFixture = require('./fixtures/valid-new')

bootstrap(serviceLocator)

before(function (done) {
  createService(serviceLocator, done)
})

describe('tier service', function () {
  describe('#getDefaultTiers()', function () {
    function createTier(n, next) {
      var fixture = createFixture()
      if (n < 2) {
        fixture.defaultActions = [ 'action' ]
      } else if (n < 4) {
        fixture.defaultActions = [ 'action', 'test' ]
      } else if (n < 6) {
        fixture.defaultActions = [ 'test', 'action' ]
      } else {
        fixture.defaultActions = [ 'test' ]
      }
      serviceLocator.tierService.create(fixture, next)
    }

    before(function (done) {
      async.times(10, createTier, done)
    })

    it('should return with an array of tiers that are default for the action', function (done) {
      var action = 'action'
      serviceLocator.tierService.getDefaultTiers(action, function (err, tiers) {
        if (err) return done(err)
        assert.equal(tiers.length, 6)
        tiers.forEach(function (tier) {
          assert(tier.defaultActions.indexOf(action) > -1, 'Tier should have action')
        })
        done()
      })
    })
  })
})
