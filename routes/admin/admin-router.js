const router = require("express").Router();

const actions = require("./admin-model.js");
//const restricted = require("../../auth/restricted-middleware.js");

const db = require("../../database/dbConfig.js");

// GET for /admin/stories
router.get("/stories", async (req, res) => {
  try {
    const stories = await actions.getPendingStories();
    res.status(200).json(stories);
  } catch (error) {
    res
      .status(500)
      .json({ message: "We ran into an error retrieving the stories." });
  }
});

// POST for admin/stories/approve/:id
// router
//   .route("/stories/approve/:id")

//   .post(
//     async (
//       { body: { title, name, storytext, country }, params: { id } },
//       res,
//       next
//     ) => {
//       if (title && storytext) {
//         try {
//           const newId = await actions.approveStory(id, {
//             title,
//             name,
//             storytext,
//             country
//           });
//           if (newId) {
//             res.status(201).json({ newStoryID: newId });
//           } else {
//             res.status(404).json({ message: "The story could not be found." });
//           }
//         } catch (error) {
//           console.log(error);
//           next(error);
//         }
//       } else {
//         res.status(400).json({
//           message: "Please provide a title and story to add."
//         });
//       }
//     }
//   );
router
  .route("/stories/approve/:id")

  .post(async ({ params: { id } }, res, next) => {
    try {
      const story = await db("pending_stories").where({ id });
      const { title, name, storytext, country } = story[0];

      //console.log("t", title, name, storytext, country);
      const [newId] = await db("stories").insert({
        title,
        name,
        storytext,
        country
      });
      //console.log("id", id);
      await db("pending_stories")
        .where({ id })
        .delete();
      if (newId) {
        res.status(201).json({ newStoryID: newId });
      } else {
        res.status(404).json({ message: "The story could not be found." });
      }
    } catch (error) {
      //console.log(error);
      next(error);
    }
  });

// DELETE for /stories/reject/:id
router
  .route("/stories/reject/:id")
  .delete(async ({ params: { id } }, res, next) => {
    try {
      const count = await actions.rejectStory(id);
      if (count) {
        res.status(200).end();
      } else {
        res.status(404).json({ message: "This story could not be located." });
      }
    } catch (error) {
      next(error);
    }
  });

router.post("/stories", async (req, res) => {
  const story = req.body;

  if (story.title && story.storytext && story.country) {
    try {
      const inserted = await actions.postPendingStory(story);
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
