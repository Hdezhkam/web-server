const express = require('express')
const chalk = require('chalk')
const path = require('path')
const hbs = require ('hbs')

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//Setup handlebars engin and views location
app.set('views', viewPath)
app.set('view engine', 'hbs')
hbs.registerPartials(partialsPath)

//setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title : 'Weather',
        name: 'Hamid Dezhkam'
    })
})

app.get('/about', (req, res) => {
    res.render('about',{
        title: 'Amout me',
        name : 'Hamid Dezhkam'
    })
})

app.get('/Help', (req, res) => {
    res.render('help',{
        helpText: 'This is some helpful text.',
        title: 'Help',
        name : 'Hamid Dezhkam'
    })
})

app.get('/weather', (req, res) => {
    res.send('Weather page')
})



app.listen(3000, () => {
    console.log('Server is up on port 3000');
})