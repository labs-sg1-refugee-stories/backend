const db = require("../../database/dbConfig.js");

module.exports = {
  add,
  find,
  findById,
  update,
  remove
};

function find() {
  return db("stories").select("id", "title", "name", "storytext", "country");
}

function findById(id) {
  return db("stories")
    .where({ id })
    .first();
}

function add(story) {
  // passing "id" as the second parameter is recommended to ensure the id is returned
  // when connecting to other database management systems like Postgres
  return db("stories")
    .insert(story, "id")
    .then(([id]) => {
      return findById(id);
    });
}

function update(id, changes) {
  return db("stories")
    .where({ id })
    .update(changes)
    .then(count => {
      if (count > 0) {
        return findById(id);
      } else {
        return null;
      }
    });
}

function remove(id) {
  return db("stories")
    .where({ id })
    .del();
}
