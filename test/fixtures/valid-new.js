var created = new Date()
  , date = created.toISOString()

module.exports = function () {
  return (
    { name: 'Tier name'
    , description: 'This is the base tier'
    , resources: [ 'account' ]
    , defaultActions: [ 'register' ]
    , account: '123'
    , createdDate: date
    })
}
