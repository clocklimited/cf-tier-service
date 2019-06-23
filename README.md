# cf-tier-service

[![Greenkeeper badge](https://badges.greenkeeper.io/clocklimited/cf-tier-service.svg)](https://greenkeeper.io/)

The underlying tiering service used in Kado.

## Installation

```
npm install --save cf-tier-service
```

## Usage

Ensure that your component globber is looking for cf-*-service in your node_modules folder for this to get picked up.

```
var componentsFolder = serviceLocator.config.components
  , componentGlobs =
    [ __dirname + '/../components/service/**/init.js'
    , __dirname + '/../node_modules/cf-*-service/init.js'
    ]
  , componentPaths = [].concat.apply([], componentGlobs.map(function (path) { return glob.sync(path) }))
```

It will then be accessible at `serviceLocator.tierService`.

It has all the standard `crud-service` functions, as well as a `getDefaultTiers()` function.

### `tierService.getDefaultTiers(action, cb)`
- action is an action (or array of actions) to return the default tiers for

An example of usage for this is on a `userService` pre create/update action:

```
function getDefaultTiers(user, cb) {
  serviceLocator.tierService.getDefaultTiers(user.action, function (err, tiers) {
    if (err) return cb(err)
    user.tiers = tiers
    return cb(null, user)
  })
}

userService.pre('create', getDefaultTiers)
userService.pre('update', getDefaultTiers)
```

#### `tierService.getDefaultTiers('register', cb)`
- returns all tiers for the register action

#### `tierService.getDefaultTiers([ 'register', 'subscribe' ], cb)`
- returns all tiers for register AND subscribe action

## Credits
[Dom Harrington](https://github.com/domharrington)

## License

ISC
