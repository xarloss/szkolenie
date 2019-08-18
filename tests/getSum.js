const getSum = require('./../zadanie3')
const {expect} = require('chai')
const {describe, test} = require('./utils')

module.exports = function (msg) { 
    describe('Testy do zadania 3 | getSum', () => {
        test('Test dla danych (1, 0)', () => {
            const array = [1,0]
            const correct = 1
            expect(getSum(...array)).to.equal(correct)
        })
        test('Test dla danych (1, 2)', () => {
            const array = [1, 2]
            const correct = 3
            expect(getSum(...array)).to.equal(correct)
        })
        test('Test dla danych (0, 1)', () => {
            const array = [0, 1]
            const correct = 1
            expect(getSum(...array)).to.equal(correct)
        })
        test('Test dla danych (1, 1)', () => {
            const array = [1, 1]
            const correct = 1
            expect(getSum(...array)).to.equal(correct)
        })
        test('Test dla danych (-1, 0)', () => {
            const array = [-1, 0]
            const correct = -1
            expect(getSum(...array)).to.equal(correct)
        })
        test('Test dla danych (-1, 2)', () => {
            const array = [-1, 2]
            const correct = 2
            expect(getSum(...array)).to.equal(correct)
        })
    })
};