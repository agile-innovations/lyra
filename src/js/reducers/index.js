'use strict';
var combineReducers = require('redux-immutable').combineReducers;

module.exports = combineReducers({
  scene: require('./scene'),
  vega: require('./vega'),
  inspector: require('./inspector'),
  marks: require('./marks'),
  signals: require('./signals'),
  walkthrough: require('./walkthrough')
});
