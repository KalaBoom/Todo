const
    express = require('express'),
    tasks   = require('./../tasks'),
    parser   = require('body-parser'),
    page    = express.Router(),
    urlCoder = parser.urlencoded({extended: false})

page.get('/', (req, res, next) => {
    res.render('addTask')
})

page.get('/addTask', (req, res, next) => {
    res.send("Task is create")
})

page.post('/addTask', urlCoder, (req, res, next) => {
    let body = req.body
    tasks.add(body.taskName, body.taskDescription)
    res.redirect('/create')
})

module.exports = page