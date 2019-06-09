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
router.post('/stories', async (req, res) => {
  const story = req.body;

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
