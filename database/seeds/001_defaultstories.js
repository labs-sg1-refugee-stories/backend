exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("stories")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("stories").insert([
        [
          {
            name: "Ahmed",
            title: "Motherhood in a Syrian Refugee Camp",
            text: "I have been in Za’atari for a year and a half with my husband and our five children. The youngest is 8 months old and was born in the camp. We left Syria because our village was under heavy shelling.",
            country: "Syria",
            approved: true,
          },
          {
            name: "Zeinah",
            title: "A Home with a View",
            text: "My children were born in the city and my whole family lived there, but we had to flee to Turkey during one of the outbreaks of fighting,” said Farah. “If we hadn’t left when we did we would have been killed along with so many other people. We left Syria at the right time.",
            country: "Syria",
            approved: true,
          },
          {
            name: "Basem Charaf",
            title: "From war to Sport",
            text: "In 2012, after a journey across Europe, he settles down in Belgium where he asks for asylum. Following some bad news, he sinks into a form of anorexia. 5 years later, he tells how sport allowed him to face racism and the harshness of Belgian life.",
            country: "Belgium",
            approved: true,
          },
          {
            name: "Elias Nagwano",
            title: "From Congo to Uganda",
            text: "Elias Nagwano fled his native Congo in 2013. Directly affected by the war, he had to leave everything behind to seek safety in Uganda. From everyday challenges to life-changing decisions, he tells us how he has managed to rebuild his life and realize his dreams despite everything.",
            country: "Congolese",
            approved: true,
          },
          {
            name: "Ramy Ayari",
            title: "The Price of Battle",
            text: "He has been living in exile in Montreal since 2016. An activist and spokesperson in the LGBTQ+ community, he fled his country because it was no longer safe for him to keep fighting for the cause. Here, he reflects on an activist journey that has been anything but ordinary.",
            country: "Tunisia",
            approved: true,
          },
          {
            name: "Yaser",
            title: "Yaser's Story",
            text: "For two long years Yaser's* five children, Ali*, 15, Achmed*, 14, Hala*, 10, Sedra*, 7 and Aya*, 3, have not been able to go to school or play outside. Violence kept them from living a normal life. There was constant fear of sniper and missile attacks. They learned what type of weapon was being used just by the sound it made.",
            country: "Belgium",
            approved: true,
          },
          {
            name: "Walaa",
            title: "One Sad Dark Night",
            text: "A 17-year-old Syrian refugee living in East Amman, Jordan. She learned English at school and wrote this article in English to mark 1000th day of the Syrian conflict.",
            country: "Syria",
            approved: true,
          },
          {
            name: " Tania Marcotty Dolenga",
            title: "Story of A “White Russian” woman",
            text: "Tania Marcotty Dolenga is from an illustrious family of Russian aristocrats. She was born a Countess in 1929. At 88 years old, from the USA, that she shares her story of escaping the Bolshevik Revolution. The wars of the twentieth century forced her, as a child, to transform and reshape her identity again and again.",
            country: "Russia",
            approved: true,
          },
          {
            name: "author09",
            title: "title09",
            text: "text09",
            country: "usa",
            approved: true,
          },
          {
            name: "author10",
            title: "title10",
            text: "text10",
            country: "usa",
            approved: true,
          }
          {
            name: "author11",
            title: "title11",
            text: "text11",
            country: "usa",
            approved: true,
          }
        ]);
    });
};
