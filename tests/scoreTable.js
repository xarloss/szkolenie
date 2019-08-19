const axios = require('axios')
const cTable = require('console.table')

axios.get('http://livathos.ayz.pl/szkolenie-get.php').then(res => {
    const data = res.data.sort( (a,b)=> new Date(b.date).getTime() - new Date(a.date).getTime())
    const list = []
    data.forEach(element => {
        if(!isThere(element, list))
            list.push(element)
    })
    console.table(list)
})

function isThere(elem, array){
    let isHere = false
    array.forEach(item => {
        if(item.name == elem.name)
            isHere = true
    })
    return isHere
}