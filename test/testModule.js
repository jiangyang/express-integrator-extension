'use strict'

var installer = {
  connectorInstallerFunction: function (options, callback) {
    options.function = 'connectorInstallerFunction'
    return callback(null, options)
  },

  runInstallerErrorStep: function (options, callback) {
    return callback(new Error('runInstallerErrorStep'))
  },

  runInstallerSuccessStep: function (options, callback) {
    options.function = 'runInstallerSuccessStep'
    return callback(null, options)
  }
}

var uninstaller = {
  connectorUninstallerFunction: function (options, callback) {
    options.function = 'connectorUninstallerFunction'
    return callback(null, options)
  },

  runUninstallerErrorStep: function (options, callback) {
    return callback(new Error('runUninstallerErrorStep'))
  },

  runUninstallerSuccessStep: function (options, callback) {
    options.function = 'runUninstallerSuccessStep'
    return callback(null, options)
  }
}

var settings = {
  persistSettings: function (options, callback) {
    if (options.error) {
      return callback(new Error('persistSettings'))
    }

    options.function = 'persistSettings'
    return callback(null, options)
  },

  refreshMetadata: function (options, callback) {
    options.function = 'refreshMetadata'
    return callback(null, options)
  }
}

var hooks = {
  doSomethingError: function (options, callback) {
    var error = new Error('doSomethingError')
    error.name = 'my_error'

    return callback(error)
  },

  doSomething: function (options, callback) {
    options.function = 'doSomething'
    return callback(null, [options])
  },

  echoResponse: function (options, callback) {
    return callback(null, options.resp)
  },

  respondWithNonSearializableObject: function (options, callback) {
    return callback(null, {
      a: 'b',
      date: new Date()
    })
  }
}

var wrappers = {
  pingError: function (options, callback) {
    var error = new Error('pingMessage')
    error.name = 'pingCode'
    return callback(error)
  },

  importOptions: function (options, callback) {
    // lets pass the options back via id for validation!
    return callback(null, [{statusCode: 200, id: options}])
  }
}

var utilities = {
  myUtility: function (options, callback) {
    if (options.error) {
      return callback(new Error('myUtility error'))
    }

    options.function = 'myUtility'
    return callback(null, options)
  }
}

exports.installer = installer
exports.uninstaller = uninstaller
exports.settings = settings
exports.hooks = hooks
exports.wrappers = wrappers
exports.utilities = utilities
