'use strict';
var TOGGLE_LAYERS = require('../constants/actions').TOGGLE_LAYERS;

/**
 * Return an object for the action to toggle a set of layers.
 *
 * @param {number[]} layerIds - Array of layer IDs to toggle
 * @returns {Object} Redux action
 */
module.exports = function(layerIds) {
  return {
    type: TOGGLE_LAYERS,
    layerIds: layerIds
  };
};
