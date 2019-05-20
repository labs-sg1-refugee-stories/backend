exports.up = function(knex, Promise) {
  return knex.schema.createTable("stories", stories => {
    stories.increments();

    stories.string("name", 128).notNullable();
    stories.text("storytext").notNullable();
    stories.string("country");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("stories");
};
