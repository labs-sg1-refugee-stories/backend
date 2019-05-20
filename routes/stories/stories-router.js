const express = require("express");

const Stories = require("./stories-model.js");

const router = express.Router();

router.get("/", (req, res) => {
  Stories.find()
    .then(stories => {
      res.status(200).json(stories);
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: "We ran into an error retrieving the stories." });
    });
});

router.get("/:id", async (req, res) => {
  try {
    const story = await Stories.findById(req.params.id);
    if (story) {
      res.status(200).json(story);
    } else {
      res.status(404).json({ message: "We could not find a strory." });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "We ran into an error retrieving a story." });
  }
});

router.post("/", async (req, res) => {
  const story = req.body;

  if (story.name && story.storytext && story.country) {
    try {
      const inserted = await Stories.add(story);
      res.status(201).json(inserted);
    } catch (error) {
      res
        .status(500)
        .json({ message: "We ran into an error adding your story." });
    }
  } else {
    res
      .status(400)
      .json({ message: "Please enter your story, name and country." });
  }
});

module.exports = router;
