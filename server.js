const express = require('express')
const app = express()
const shortURL= require('./models/shortURL')
const mongoose = require('mongoose')
//avoid deprecation warning
mongoose.connect('mongodb://localhost/sinnoURL', {
    useNewUrlParser: true, useUnifiedTopology: true,
})

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended:false}))

app.get('/', async (req , res) => {
    const shortURLs = await shortURL.find()
    res.render('index', {shortURLs:shortURLs})
})

app.post('/shortURLs', async(req , res) => {
    await shortURL.create({ full: req.body.fullURL}) //wait before creating shortURL finished to move on 
    res.redirect('/')
})
app.listen(process.env.PORT || 5000);