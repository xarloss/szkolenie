
const arrayFilter = require('./../zadanie1')
const {expect} = require('chai')
const {describe, test} = require('./utils')


module.exports = function (msg) { 
    describe('Testy do zadania 1 | arrayFilter', () => {
        test('Przykład z objaśnienia', () => {
            const array = ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
            const removeThis = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
            const correct = ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
            expect(arrayFilter(array, removeThis)).to.eql(correct)
        })
        test('Takie same tablice', () => {
            const array = ["Mallard", "Hook Bill"]
            const removeThis = ["Mallard", "Hook Bill"]
            const correct = []
            expect(arrayFilter(array, removeThis)).to.eql(correct)
        })
    })
};