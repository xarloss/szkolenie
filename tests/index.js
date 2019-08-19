const {getCounter} = require('./utils')
const arrayFilterTests = require('./arrayFilter')
const removeSmallestTests = require('./removeSmallest')
const getSumTests = require('./getSum')
const ErrorLog = require('./error')

function tests(){
    ErrorLog.clearLog()
    arrayFilterTests()
    removeSmallestTests()
    getSumTests()

    return getCounter()
}

module.exports = tests