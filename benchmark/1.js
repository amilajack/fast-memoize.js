'use strict'

// 1st attempt

module.exports = function(target) {
  var memoized = function() {
    var cacheKey = JSON.stringify(arguments)

    if (!(cacheKey in memoized._cache)) {
      memoized._cache[cacheKey] = target.apply(this, arguments)
    }

    return memoized._cache[cacheKey]
  }

  memoized._cache = {}

  return memoized
}
