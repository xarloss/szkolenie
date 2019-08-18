const {getCounter} = require('./utils')
const arrayFilterTests = require('./arrayFilter')
const removeSmallestTests = require('./removeSmallest')
const getSumTests = require('./getSum')

function tests(){
    arrayFilterTests()
    removeSmallestTests()
    getSumTests()

    return getCounter()
}

module.exports = tests