const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
require('./dbconnect')



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))


app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')


app.use('/', require('./routes/pages'))
app.use('/api', require('./routes/api'))







app.listen(3001, () =>
    console.log(`Server running on http://localhost:${3001}`)
)