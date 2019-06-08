exports.up = function(knex, Promise) {
  return knex.schema.createTable('admins', table => {
    table.increments();
    table
      .string('username', 128)
      .notNullable()
      .unique();
    table.string('password', 128).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('admins');
};
