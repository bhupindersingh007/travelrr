const bcrypt = require('bcrypt');
const mongoose = require('mongoose')
const User = require('../models/User')
const dotenv = require('dotenv')

dotenv.config()
mongoose.connect(process.env.DB_URI)

const passwordText = 'password'

bcrypt.hash(passwordText, 10, async (err, hash) => {


    try {
        const user = await User.create({
            username: 'admin',
            email: 'abc@gmail.com',
            password: hash
        })

        console.log('user created.')
        console.log(`email: ${user.email}, password: ${passwordText}`)

       // process.exit()

    } catch (e) {
        console.log(e)
    }


});
