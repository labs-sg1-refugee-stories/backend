exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("pending_stories").then(function() {
    return knex("pending_stories").insert([
      {
        title: "One Sad Dark Night",
        name: "Walaa",
        storytext:
          "A 17-year-old Syrian refugee living in East Amman, Jordan. She learned English at school and wrote this article in English to mark 1000th day of the Syrian conflict.",
        country: "Syria"
      },
      {
        title: "Yaser's Story",
        name: "Yaser",
        storytext:
          "For two long years Yaser's* five children, Ali*, 15, Achmed*, 14, Hala*, 10, Sedra*, 7 and Aya*, 3, have not been able to go to school or play outside. Violence kept them from living a normal life. There was constant fear of sniper and missile attacks. They learned what type of weapon was being used just by the sound it made.",
        country: "Belgium"
      },
      {
        title: "Story of A “White Russian” woman",
        name: " Tania Marcotty Dolenga",
        storytext:
          "Tania Marcotty Dolenga is from an illustrious family of Russian aristocrats. She was born a Countess in 1929. At 88 years old, from the USA, that she shares her story of escaping the Bolshevik Revolution. The wars of the twentieth century forced her, as a child, to transform and reshape her identity again and again.",
        country: "Russia"
      }
    ]);
  });
};
