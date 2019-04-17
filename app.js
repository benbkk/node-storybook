const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')
const passport = require('passport')

// Passsport COnffig
require('./config/passport')(passport)

// Load Routes
const auth = require('./routes/auth')


// Passport Config
require('./config/passport')(passport)


const app = express()
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({extended: true}))


mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/storybook', {
  useNewUrlParser: true
})

const port = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send('It Works')
})

// Use Routes
app.use('/auth', auth)

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})