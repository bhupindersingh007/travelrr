const User = require('../models/User')
const bcrypt = require('bcrypt')

const show = (req, res) => {

    if (req.session.user) { res.redirect('/') }

    res.render('auth/login')

}

const login = async (req, res) => {

    const user = await User.findOne({ email: req.body.email })

    if (!user) {

        req.session.errors = ['Invalid credentials']

        return res.redirect('/login')
    }

    bcrypt.compare(req.body.password, user.password, (error, same) => {

        if (same) {

            req.session.user = { email: user.email, user_type: user.user_type }

            res.redirect('/')

        } else {

            req.session.errors = ['Invalid credentials']

            res.redirect('/login')

        }

    })

}


const logout = (req, res) => {

    req.session.destroy(() => res.redirect('/'))
    
}

module.exports = { show, login, logout }