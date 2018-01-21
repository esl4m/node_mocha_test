var chai = require('chai');
var expect = chai.expect;
var assert = require('assert');
var sum = require('../src/test-add');

beforeEach(function() {
    console.log('    Before every test .. Log this.');
});

describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            assert.equal([1,2,3].indexOf(4), -1);
        });
    });

    describe('Function tests', function() {
        it('should return zero for a zero length input array', function () {
            var getSum = new sum([]);
            expect(getSum.getTotal()).to.equal(0);
        });
    });

    describe('Function test sum', function() {
        it('should return sum of input array', function () {
            var getSum = new sum([1,2,3,4]);
            expect(getSum.getTotal()).to.equal(10);
        });
    });

    describe('Function test sub', function() {
        it('should return abs number from subtract 2 values of input array', function () {
            var getsub = new sum([4, 3]);
            expect(getsub.getSubtract()).to.equal(1);
        });
    });
});
