const db = require("../../database/dbConfig.js");

module.exports = {
  add,
  find,
  findBy,
  findById
};

function find() {
  return db("stories").select("title", "story", "country");
}

function findBy(filter) {
  return db("stories").where(filter);
}

async function add(story) {
  const [id] = await db("stories").insert(story);

  return findById(id);
}

function findById(id) {
  return db("stories")
    .where({ id })
    .first();
}
