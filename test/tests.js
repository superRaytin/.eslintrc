'use strict';

const should = require('should');
const eslintrc = require('../index');

describe('eslint-config-leonshi', function() {
  it('works', function() {
    eslintrc.parser.should.equal('espree');
    eslintrc.parserOptions.ecmaVersion.should.equal(6);
  });
});