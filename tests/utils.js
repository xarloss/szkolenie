const chalk = require('chalk');
let success = 0

function test(name, fn){
    try {
        fn()
        success++
        console.log('   ' + chalk.green(name))
    } catch(err) {
        console.log('   ' + chalk.red(name))
    }
}

function describe(name, fn){
    console.log(chalk.yellow.bold.underline(name))
    fn()
    console.log('')
}

function getCounter(){
    return success
}

module.exports = {
    test,
    describe,
    getCounter
}