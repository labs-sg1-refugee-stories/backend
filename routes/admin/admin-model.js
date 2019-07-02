const db = require('../../database/dbConfig.js');

module.exports = {
  getPendingStories,
  approveStory,
  rejectStory,
  postPendingStory,
  findById,
};

function getPendingStories() {
  return db('pending_stories').select('*');
}

async function approveStory(id) {
  const story = await db('pending_stories')
    .where({ id })
    .first();
  if (story.id) {
    const { title, name, storytext, country, photoUrl, authorUrl } = story;
    const approvedStory = await db('stories')
      .insert({
        title,
        name,
        storytext,
        country,
        photoUrl,
        authorUrl,
      })
      .returning('*');
    await db('pending_stories')
      .where({ id })
      .delete();
    return approvedStory[0].id;
  }
}

function rejectStory(id) {
  return db('pending_stories')
    .where({ id })
    .del();
}

async function postPendingStory(post) {
  const [id] = await db('pending_stories').insert(post, 'id');

  return findById(id);
}

function findById(id) {
  return db('pending_stories')
    .where({ id })
    .first();
}
