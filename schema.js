var schemata = require('schemata')
  , validity = require('validity')

module.exports = function () {

  return schemata(
    { _id:
      { type: String
      }
    , name:
      { type: String
      , validators:
        { all: [ validity.required ]
        }
      }
    , description:
      { type: String
      , validators:
        { all: [ validity.required ]
        }
      }
    , resources:
      { type: Array
      , defaultValue: function () { return [] }
      , validators:
        { all: [ validity.required ]
        }
      }
    , account:
      { type: String
      , validators: { all: [ validity.required ] }
      }
    , createdDate:
      { type: Date
      , validators:
        { all: []
        }
      , defaultValue: function () { return new Date() }
      }
    }
  )
}
