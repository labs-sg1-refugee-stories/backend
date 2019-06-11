require('dotenv').config()
const multer = require('multer')
const cloudinary = require('cloudinary')
const cloudinaryStorage = require('multer-storage-cloudinary')
const db = require('../../database/dbConfig)

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
})

const storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: 'demo',
  allowedFormats: ['jpg', 'png', 'gif'],
  transformation: [{ width: 500, height: 500, crop: 'scale' }],
})

const upload = multer({ storage }).single('profile_pic')

module.exports = {
  async uploadImg(req, res, next) {
    const user_id = req.body.user 
    upload(req, res, function(err) {
      if (err) {
        console.log(err)
      }
      db('users')
        .update('profile_picture', req.file.secure_url)
        .where('id', req.user.id)
        .then(response => {
          res.status(200).json({ success: 'added image' })
        })
        .catch(err => console.log(err))
    })
  },
  async getImg(req, res, next) {
    try {
      const user_id =  req.body.user_id 
      const selectPromise = await db('users')
        .where({ id: user_id })
        .select('profile_picture')
      if (selectPromise) {
        res.status(200).json(selectPromise)
      } else {
        res.status(500).json({ msg: `user doesn't have an a image` })
      }
    } catch (error) {
      console.log(error, ' 🦄')
    }
  },
}
