exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("stories")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("stories").insert([
        {
          name: "s",
          storytext: "s",
          country: "s"
        }
      ]);
    });
};
