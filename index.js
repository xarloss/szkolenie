const axios = require('axios')
const score = require('./tests/index')()
const os = require('os')

const insertScore = {
    name: require("os").userInfo().username,
    score,
    date: new Date()
}
const formBody = Object.keys(insertScore).map(
    key => encodeURIComponent(key) + '=' + encodeURIComponent(insertScore[key])
).join('&')

axios.post('http://livathos.ayz.pl/szkolenie.php', formBody)


