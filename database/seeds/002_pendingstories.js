exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("pending_stories").then(function() {
    return knex("pending_stories").insert([
      {
        title: "A Home with a View",
        name: "Zeinah",
        storytext:
          "My children were born in the city and my whole family lived there, but we had to flee to Turkey during one of the outbreaks of fighting,” said Farah. “If we hadn’t left when we did we would have been killed along with so many other people. We left Syria at the right time.",
        country: "Syria"
      },
      {
        title: "From war to Sport",
        name: "Basem Charaf",
        storytext:
          "In 2012, after a journey across Europe, he settles down in Belgium where he asks for asylum. Following some bad news, he sinks into a form of anorexia. 5 years later, he tells how sport allowed him to face racism and the harshness of Belgian life.",
        country: "Belgium"
      }
    ]);
  });
};
