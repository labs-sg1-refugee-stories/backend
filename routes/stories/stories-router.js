const express = require("express");

const Stories = require("./stories-model.js");

const router = express.Router();

router.get("/", (req, res) => {
  Stories.find()
    .then(stories => {
      res.json(stories);
    })
    .catch(err => res.send(err));
});

module.exports = router;
