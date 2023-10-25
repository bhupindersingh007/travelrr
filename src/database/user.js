const bcrypt = require('bcrypt');
const mongoose = require('mongoose')
const User = require('../models/User')
const dotenv = require('dotenv')

dotenv.config()
mongoose.connect(process.env.DB_URI)

const passwordText = process.env.ADMIN_PASSWORD;

bcrypt.hash(passwordText, 10, async (err, hash) => {


    try {

        const user = await User.create({
            username: process.env.ADMIN_USERNAME,
            email: process.env.ADMIN_EMAIL,
            password: hash
        })

        console.log('user created.')
        console.log(`email: ${user.email}, password: ${passwordText}`)

    } catch (e) {
        console.log(e)
    }


});
