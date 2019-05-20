exports.up = function(knex, Promise) {
  return knex.schema.createTable("stories", stories => {
    stories.increments();

    stories.string("title", 128).notNullable();
    stories.text("story").notNullable();
    stories.string("country");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("stories");
};
