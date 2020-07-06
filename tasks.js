const fs = require('fs')

let tasks = {
    list: []
}

tasks.read = function() {
    let list = fs.readFileSync('tasks.json', 'utf8') || false
    let test = list == false ? [] : JSON.parse(list)
    this.list = test
}

tasks.add = function(name, description) {
    let task = {
        name:  name,
        description: description,
        complite: false
    }
    this.list.push(task)
    let str = JSON.stringify(this.list)
    fs.writeFile('tasks.json', str, 'utf8', err => {
        if(err) throw err
    })
}

tasks.complite = function(id) {
    this.list[id].complite = true
    let str = JSON.stringify(this.list)
    fs.writeFile('tasks.json', str, 'utf8', err => {
        if(err) throw err
    })
}

module.exports= tasks