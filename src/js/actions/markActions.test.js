/* eslint no-unused-expressions:0 */
'use strict';
var expect = require('chai').expect;

var actions = require('../constants/actions');
var markActions = require('./markActions');
var counter = require('../util/counter');

describe('markActions', function() {

  describe('addMark action creator', function() {
    var addMark;

    beforeEach(function() {
      addMark = markActions.addMark;
      counter.reset();
    });

    it('is a function', function() {
      expect(addMark).to.be.a('function');
    });

    it('returns an action object', function() {
      var result = addMark({});
      expect(result).to.be.an('object');
      expect(result).to.have.property('type');
      expect(result.type).to.be.a('string');
      expect(result.type).to.equal(actions.MARK_ADD);
    });

    it('sets a numeric ID on the returned object', function() {
      var result = addMark({});
      expect(result).to.have.property('id');
      expect(result.id).to.be.a('number');
    });

    it('sets a string name on the returned object', function() {
      var result = addMark({
        type: 'rect'
      });
      expect(result).to.have.property('name');
      expect(result.name).to.be.a('string');
      expect(/rect_\d+/.test(result.name)).to.equal(true);
    });

    it('passes through a provided name in the returned object', function() {
      var result = addMark({
        name: 'special_rect',
        type: 'rect'
      });
      expect(result).to.have.property('name');
      expect(result.name).to.be.a('string');
      expect(result.name).to.equal('special_rect');
    });

    it('passes through and augments the provided mark properties', function() {
      var props = {
        type: 'line'
      };
      var result = addMark(props);
      expect(result).to.have.property('props');
      expect(result.props).not.to.equal(props);
      expect(result.props).to.deep.equal({
        _id: 1,
        name: 'line_1',
        type: 'line'
      });
    });

    it('sets a relevant streams object on the returned object', function() {
      var result = addMark({
        type: 'line',
        _id: 2501
      });
      expect(result).to.have.property('streams');
      expect(result.streams).to.be.an('object');
      expect(Object.keys(result.streams).sort()).to.deep.equal([
        'lyra_line_2501_x',
        'lyra_line_2501_y'
      ]);
    });

  });

});
