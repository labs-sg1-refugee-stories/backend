require('dotenv').config();

const router = require('express').Router();

//* Need to import db for pagination feature
//TODO: Clean up models with regard to pagination
const db = require('../../database/dbConfig');

const Stories = require('./stories-model.js');

router.get('/', async (req, res) => {
  //* Destructures limit and offset from req.query
  //* and enforces type number
  let { offset = 0, limit = 10 } = req.query;
  offset = Number(offset);
  limit = Number(limit);
  try {
    const stories = await Stories.find()
      .limit(limit)
      .offset(offset);
    //* Need to notify frontend of total number of stories (count), limit, and offset
    const { count } = await db('stories')
      .count()
      .first();
    //* Pagination info sent to client in meta object
    res.status(200).json({ stories, meta: { count, limit, offset } });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'We ran into an error retrieving the stories.' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const story = await Stories.findById(req.params.id);

    if (story) {
      res.status(200).json(story);
    } else {
      res.status(404).json({ message: 'We could not find a story.' });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: 'We ran into an error retrieving a story.' });
  }
});

router.post('/', async (req, res) => {
  const story = req.body;

  if (story.title && story.storytext && story.country) {
    try {
      const inserted = await Stories.add(story);
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

router.put('/:id', async (req, res) => {
  const changes = req.body;

  if (changes) {
    try {
      const updated = await Stories.update(req.params.id, changes);
      if (updated) {
        res.status(200).json(updated);
      } else {
        res.status(404).json({
          message: 'This story does not exist.',
        });
      }
    } catch (error) {
      res
        .status(500)
        .json({ message: 'We ran into an error updating your story.' });
    }
  } else {
    res.status(400).json({
      message: 'Please enter your story, name and country.',
    });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const count = await Stories.remove(req.params.id);
    if (count > 0) {
      res.status(200).json({
        message: 'Deleted successfully!',
      });
      // res.status(204).end();
    } else {
      res.status(404).json({
        message: 'That story does not exist, perhaps it was deleted already!',
      });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: 'We ran into an error removing this story.' });
  }
});

router.get('/:id/comments', async (req, res) => {
  try {
    const story = await Stories.findById(Number(req.params.id));
    console.log(story);
    if (story.id) {
      const comments = await db('comments').where({
        storyId: Number(story.id),
      });
      console.log('comments', comments);
      story.comments = comments;
      res.status(200).json(story);
    } else {
      res.status(404).json({ message: 'We could not find a story.' });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: 'We ran into an error retrieving a story.' });
  }
});

module.exports = router;
