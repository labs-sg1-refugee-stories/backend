exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', table => {
    table.increments();
    table.string('name', 128).notNullable();
    table.string('text').notNullable();
    table
      .integer('storyId')
      .references('id')
      .inTable('stories')
      .onDelete('cascade')
      .onUpdate('cascade')
      .notNullable()
      .unsigned();
    table.boolean('deleted').defaultTo(false);
    table.boolean('edited').defaultTo(false);
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('comments');
};
