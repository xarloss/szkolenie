const axios = require('axios')
const score = require('./tests/index')()

const insertScore = {
    name: 'Adrian',
    score,
    date: new Date()
}
const formBody = Object.keys(insertScore).map(
    key => encodeURIComponent(key) + '=' + encodeURIComponent(insertScore[key])
).join('&')

axios.post('http://livathos.ayz.pl/szkolenie.php', formBody)


