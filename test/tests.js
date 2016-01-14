'use strict';

var should = require('should');
var eslintrc = require('../index');

describe('eslint-config-leon', function() {
  it('works', function() {
    eslintrc.parser.should.equal('espree');
    eslintrc.parserOptions.ecmaVersion.should.equal(6);
  });
});