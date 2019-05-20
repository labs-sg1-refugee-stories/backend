exports.up = function(knex, Promise) {
  return knex.schema.createTable("stories", stories => {
    stories.increments();

    stories.string("title", 255).notNullable();
    stories.string("name", 128).notNullable();
    stories.text("storytext", 255).notNullable();
    stories.string("country", 255);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("stories");
};
