var created = new Date()
  , date = created.toISOString()

module.exports = function () {
  return (
    { name: 'Tier name'
    , description: 'This is the base tier'
    , resources: [ 'account' ]
    , account: '123'
    , createdDate: date
    })
}
