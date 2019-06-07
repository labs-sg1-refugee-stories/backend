exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', table => {
    table.increments();
    table.string('text').notNullable();
    table
      .integer('userId')
      .references('id')
      .inTable('users')
      .onDelete('cascade')
      .onUpdate('cascade')
      .unsigned();
    table
      .integer('storyId')
      .references('id')
      .inTable('stories')
      .onDelete('cascade')
      .onUpdate('cascade')
      .unsigned();
    table.boolean('deleted').defaultTo(false);
    table.boolean('edited').defaultTo(false);
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.truncate('comments');
};
