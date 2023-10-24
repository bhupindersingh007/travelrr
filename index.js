const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const session = require('express-session')
const dotenv = require('dotenv')
const postRoutes = require('./src/routes/post')
const authRoutes = require('./src/routes/auth')

const app = express()

dotenv.config()

const port = process.env.PORT 

mongoose.connect(process.env.DB_URI)

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie : {
        maxAge : 3600000,
        expires : new Date(Date.now() + 3600000)
    }

}))


app.use(express.static('public'))

app.set('view engine', 'ejs')

app.set('views', 'src/views')

app.use(express.urlencoded({ extended: true, limit: '50mb' }))


app.use(methodOverride('_method'))

app.use((req, res, next) => {

    res.locals.loggedUser = req.session.user ?? null

    res.locals.success = req.session.success

    res.locals.errors =  req.session.errors
    
    req.session.errors = []

    req.session.success = null

    next()

})


app.use('/', postRoutes);

app.use('/', authRoutes);

app.listen(port, () => console.log(`app is running on port ${port}`))