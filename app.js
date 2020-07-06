const
    express  = require('express'),
    fs       = require('fs'),
    path     = require('path'),
    routes   = require('./routes')
    
const
    app      = express(),
    PORT     = process.env.PORT || 3000,
    HOST     = '127.0.0.1'



app.set('view engine', 'pug')

app.use(express.static(path.join(__dirname,'/public')))

app.use((req, res, next) => {
    let now    = new Date()
    let hour   = now.getHours()
    let minute = now.getMinutes()
    let second = now.getSeconds()
    let data   = `${hour}:${minute}:${second} ${req.method} ${req.url} ${req.get('user-agent')}`
    fs.appendFile('server.log', data + '\n', () => {})
    next()
})

app.use('/', routes.main)
app.use('/create', routes.create)

app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
})
  
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.render('error')
})

app.listen(PORT, HOST, () => {
    console.log(`Server start on http://${HOST}:${PORT}`)
})
