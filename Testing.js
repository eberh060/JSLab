/**
 * Created by eberh060 on 1/28/14.
 */

var assert = require("assert");
var countChars = require('./Functions').countChars;
var searchFor = require('./Functions').searchFor;

describe('countChars', function(){
    describe('test 1', function(){
        it('Should give number of characters', function(){
            assert.equal(countChars("Blah"), "4");
        })
    });
});

describe('searchFor', function(){
    describe('test 1', function(){
        it('Should give index of the given set of string.', function(){
            assert.equal(searchFor("Blah", "Blah"), "0");
        })
    });
    describe('test 2', function(){
        it('Should give index of the given set of string.', function(){
            assert.equal(searchFor("Blah", "BlahBlahBlah"), "0");
        })
    });
});

