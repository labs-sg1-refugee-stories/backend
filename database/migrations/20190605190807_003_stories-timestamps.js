exports.up = function(knex, Promise) {
  return knex.schema
    .table('stories', table => {
      table.timestamps(true, true);
    })
    .table('pending_stories', table => {
      table.timestamps(true, true);
    });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .table('stories', table => {
      table.dropTimestamps();
    })
    .table('pending_stories', table => {
      table.dropTimestamps();
    });
};
