const express = require("express")
const app = express()

app.get('/', (req, res) => {
    res.render('index.ejs')
})
/*setting default port value*/
app.listen(process.env.PORT || 5000)