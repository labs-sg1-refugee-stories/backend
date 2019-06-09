exports.up = function(knex, Promise) {
  return knex.schema
    .table('stories', table => {
      table.string('photoUrl');
      table.string('authorUrl');
      table.boolean('allowComments').defaultTo(true);
    })
    .table('pending_stories', table => {
      table.string('photoUrl');
      table.string('authorUrl');
      table.boolean('allowComments').defaultTo(true);
    });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .table('stories', table => {
      table.dropColumns('photoUrl', 'authorUrl', 'comments');
    })
    .table('pending_stories', table => {
      table.dropColumns('photoUrl', 'authorUrl', 'comments');
    });
};
