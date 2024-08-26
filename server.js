const express = require("express")
const app = express()
const mongoose = require('mongoose')
const ShortUrl = require('./models/shortUrl')
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))

mongoose.connect("mongodb://localhost/urlShortener")
app.get('/', async (req, res) => {
    const shortUrls = await ShortUrl.find()
    res.render('index.ejs', {shortUrls: shortUrls})
})

app.post('/shortUrls', async (req, res) => {
   await ShortUrl.create({ full: req.body.fullUrl })
    res.redirect('/')
})
/*setting default port value*/
app.listen(process.env.PORT || 5000)