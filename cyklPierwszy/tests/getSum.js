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
        test('Test dla danych (116851354651316813245432165516513516543535416531351835138451681135135168465318135813516843138318, -15135135)', () => {
            console.time('getSum')
            const array = [116851354651316813245432165516513516543535416531351835138451681135135168465318135813516843138318, -15135135]
            const correct = 6.827119541923909e+189
            expect(getSum(...array)).to.equal(correct)
            console.timeEnd('getSum')
        })
    })
};