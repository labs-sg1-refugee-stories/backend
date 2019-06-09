exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', table => {
    table.increments();
    table.string('name').defaultTo('Anonymous');
    table.text('text').notNullable();
    table.timestamps(true, true);
    table
      .integer('storyId')
      .references('id')
      .inTable('stories');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('comments');
};
