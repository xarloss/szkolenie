const removeSmallest = require('./../zadanie2')
const {expect} = require('chai')
const {describe, test} = require('./utils')

module.exports = function (msg) { 
    describe('Testy do zadania 2 | removeSmallest', () => {
        test('Test dla danych [1,2,3,4,5]', () => {
            const array = [1,2,3,4,5]
            const correct = [2,3,4,5]
            expect(removeSmallest(array)).to.eql(correct)
        })
        test('Test dla danych [5,3,2,1,4]', () => {
            const array = [5,3,2,1,4]
            const correct = [5,3,2,4]
            expect(removeSmallest(array)).to.eql(correct)
        })
        test('Test dla danych [2,2,1,2,1]', () => {
            const array = [2,2,1,2,1]
            const correct = [2,2,2,1]
            expect(removeSmallest(array)).to.eql(correct)
        })
    })
};