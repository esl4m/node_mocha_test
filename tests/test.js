var chai = require('chai');
var expect = chai.expect;
var assert = require('assert');
var sum = require('../src/test-add');

beforeEach(function() {
    console.log('before every test in every file');
});

describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            assert.equal([1,2,3].indexOf(4), -1);
        });
    });

    describe('Function tests', function() {
        it('should return zero for a zero length input array', function () {
            getSum = new sum([]);
            expect(getSum.getTotal()).to.equal(0);
        });

        it('should return sum of input array', function () {
            getSum = new sum([1,2,3,4]);
            expect(getSum.getTotal()).to.equal(10);
        });
    });
});
