var express = require('express')
var app = express()

var hbs  = require('express-handlebars')

app.engine('handlebars', hbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get("/", function (req, res) {
  res.render('index')
})

app.listen(process.env.PORT, () => console.log('listening..'))