const
    express = require('express'),
    app     = express()
    PORT    = process.env.PORT || 8000

app.get('/', (req, res) => {
    res.send('<h1>Hello Express</h1>')
})

app.listen(PORT, () => {
    console.log(`Server start on ${PORT} port`)
})