require('dotenv').config();
const multer = require('multer');
const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');

// configures cloudinary instance
// ENV variable names must be:
// CLOUD_NAME, API_KEY, API_SECRET
// for upload middleware to function properly
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

// Accepts cloudinary instance, returns storage config
// needed for multer instance
const storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: 'demo',
  allowedFormats: ['jpg', 'png', 'gif'],
});

// upload: middleware that will add req.files object
const upload = multer({ storage }).fields([
  { name: 'photoUrl', maxCount: 2 },
  { name: 'authorUrl', maxCount: 2 },
]);

const router = require('express').Router();

const actions = require('./admin-model.js');
//const restricted = require("../../auth/restricted-middleware.js");

const db = require('../../database/dbConfig.js');

// GET for /admin/stories
router.get('/stories', async (req, res) => {
  try {
    const stories = await actions.getPendingStories();
    res.status(200).json(stories);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'We ran into an error retrieving the stories.' });
  }
});

// POST for /admin/stories
router.post('/stories', upload, async (req, res) => {
  // title, storytext, name, country on req.query
  const story = req.query;

  // add photoUrl and authorUrl to story object before insertion
  // upload makes req.files available with photo's cloudinary url
  story.photoUrl = req.files.photoUrl && req.files.photoUrl[0].secure_url;
  story.authorUrl = req.files.authorUrl && req.files.authorUrl[0].secure_url;

  if (story.title && story.storytext && story.country) {
    try {
      const inserted = await actions.postPendingStory(story);
      res.status(201).json(inserted);
    } catch (error) {
      res
        .status(500)
        .json({ message: 'We ran into an error adding your story.' });
    }
  } else {
    res
      .status(400)
      .json({ message: 'Please enter your story, name and country.' });
  }
});

// POST for admin/stories/approve/:id
router.post('/stories/approve/:id', async ({ params: { id } }, res, next) => {
  try {
    const newId = await actions.approveStory(id);
    if (newId) {
      res.status(201).json({ newStoryID: newId });
    } else {
      res.status(404).json({ message: 'The story could not be found.' });
    }
  } catch (error) {
    next(error);
  }
});

// DELETE for /stories/reject/:id
router.delete('/stories/reject/:id', async ({ params: { id } }, res, next) => {
  try {
    const count = await actions.rejectStory(id);
    if (count) {
      res.status(200).json(count);
    } else {
      res.status(404).json({ message: 'This story could not be located.' });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
