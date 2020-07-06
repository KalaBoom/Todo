const
    express  = require('express'),
    parser   = require('body-parser'),
    tasks   = require('./../tasks'),
    page     = express.Router(),
    urlCoder = parser.urlencoded({extended: false})

tasks.read()

page.get('/', urlCoder, (req, res, next) => {
    res.render('index', {
        title: 'Главная страница',
        tasks: tasks.list
    })
})

page.post('/complite', urlCoder, (req, res, next) => {
    tasks.complite(req.body.id)
})

module.exports = page