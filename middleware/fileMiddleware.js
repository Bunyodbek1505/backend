const multer = require('multer')
const path = require('path')


const storage = multer.diskStorage({
    destination:(req, file, cb) =>{
        cb(null, path.join(__dirname, "../images"))
    },
    filename:(req, file, cb) => {
        cb(null, Math.random() + file.originalname)
    }
})

const upload = multer({storage: storage})

module.exports = upload