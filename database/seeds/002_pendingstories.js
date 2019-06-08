exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('stories').then(function() {
    return knex('stories').insert([
      {
        name: 'author01',
        title: 'title1',
        text: 'story01',
        country: 'usa',
      },
    ]);
  });
};
