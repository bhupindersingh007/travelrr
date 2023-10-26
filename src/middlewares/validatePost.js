const validatePost = (req, res, next) => {


    let errors = []

    if (req.body.title.trim().length == 0) {

        errors.push('Title is required')

    }

    if (req.body.excerpt.trim().length == 0) {

        errors.push('Excerpt is required.')

    }

    if (!req.file && req.method == 'POST') {

        errors.push('Thumbnail is required.')

    }

    if (req.file && !['image/jpeg', 'image/png', 'image/jpg'].includes(req.file.mimetype)) {

        errors.push('Thumbnail must be image (jpg, jpeg, png).')

    }


    if (req.body.tags.trim().length == 0) {

        errors.push('Tags are required.')

    }


    if (req.body.content.trim().length == 0) {

        errors.push('Content is required.')

    }


    if(errors.length > 0){

        req.session.errors = errors

        return res.redirect('back')

    }

    req.body.tags = req.body.tags.split(',')

    next()

}

module.exports = validatePost