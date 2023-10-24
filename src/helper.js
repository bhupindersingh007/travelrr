const multer = require('multer')
const fs = require('fs')

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, `${__dirname}/../public/img`),
    filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
})

const upload = multer({ storage: storage })



const deleteFile = (file) => {

    fs.unlinkSync(`${__dirname}/../public/img/${file}`)

}


module.exports = { upload, deleteFile }