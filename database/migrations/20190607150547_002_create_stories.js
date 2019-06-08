exports.up = function(knex, Promise) {
  return knex.schema.createTable('stories', table => {
    table.increments();
    table.string('name').notNullable();
    table.string('title').notNullable();
    table.text('text').notNullable();
    table.string('photoUrl');
    table.boolean('approved').defaultTo(false);
    table.boolean('comments').defaultTo(true);
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('stories');
};
