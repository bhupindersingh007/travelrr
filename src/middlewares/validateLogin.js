const validateLogin = (req, res, next) => {

    let errors = []

    if (req.body.email && req.body.email.trim().length == 0) {

        errors.push('Email is required')

    }

    if (req.body.password && req.body.password.trim().length == 0) {

        errors.push('Password is required.')

    }



    if(errors.length > 0){

        req.session.errors = errors
        
        return res.redirect('back')

    }



    next()

}

module.exports = validateLogin