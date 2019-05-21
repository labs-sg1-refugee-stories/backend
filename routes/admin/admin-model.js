const db = require("../../database/dbConfig.js");

module.exports = {
  getPendingStories,
  approveStory,
  rejectStory,
  postPendingStory,
  findById
};

function getPendingStories() {
  return db("pending_stories").orderBy(
    "id",
    "title",
    "name",
    "storytext",
    "country"
  );
}

// function approveStory(id, story) {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const exists = await db("pending_stories")
//         .where({ id })
//         .first();
//       if (!exists) {
//         resolve(false);
//       }
//       const [newId] = await db("stories")
//         .insert(story)
//         .return("id");
//       const count = await db("pending_stories")
//         .where({ id })
//         .del();
//       if (count) {
//         resolve(newId);
//       } else {
//         reject(
//           Error(
//             "Something went wrong while deleting the story from pending_stories."
//           )
//         );
//       }
//     } catch (error) {
//       reject(error);
//     }
//   });
// }

function rejectStory(id) {
  return db("pending_stories")
    .where({ id })
    .del();
}

async function postPendingStory(post) {
  const [id] = await db("pending_stories").insert(post);

  return findById(id);
}

function findById(id) {
  return db("pending_stories")
    .where({ id })
    .first();
}
