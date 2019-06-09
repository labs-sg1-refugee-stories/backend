exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('stories')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('stories').insert([
        {
          id: 1,
          title: 'Motherhood in a Syrian Refugee Camp',
          name: 'Ahmed',
          storytext:
            'I have been in Za’atari for a year and a half with my husband and our five children. The youngest is 8 months old and was born in the camp. We left Syria because our village was under heavy shelling.',
          country: 'Syria',
          created_at: '2019-06-06T02:37:40.971Z',
          updated_at: '2019-06-06T02:37:40.971Z',
        },
        {
          id: 2,
          title: 'A Home with a View',
          name: 'Zeinah',
          storytext:
            'My children were born in the city and my whole family lived there, but we had to flee to Turkey during one of the outbreaks of fighting,” said Farah. “If we hadn’t left when we did we would have been killed along with so many other people. We left Syria at the right time.',
          country: 'Syria',
          created_at: '2019-06-06T02:38:03.797Z',
          updated_at: '2019-06-06T02:38:03.797Z',
        },
        {
          id: 3,
          title: 'From war to Sport',
          name: 'Basem Charaf',
          storytext:
            'In 2012, after a journey across Europe, he settles down in Belgium where he asks for asylum. Following some bad news, he sinks into a form of anorexia. 5 years later, he tells how sport allowed him to face racism and the harshness of Belgian life.',
          country: 'Belgium',
          created_at: '2019-06-06T02:38:30.861Z',
          updated_at: '2019-06-06T02:38:30.861Z',
        },
        {
          id: 4,
          title: 'From Congo to Uganda',
          name: 'Elias Nagwano',
          storytext:
            'Elias Nagwano fled his native Congo in 2013. Directly affected by the war, he had to leave everything behind to seek safety in Uganda. From everyday challenges to life-changing decisions, he tells us how he has managed to rebuild his life and realize his dreams despite everything.',
          country: 'Congolese',
          created_at: '2019-06-06T02:38:44.407Z',
          updated_at: '2019-06-06T02:38:44.407Z',
        },
        {
          id: 5,
          title: 'The Price of Battle',
          name: 'Ramy Ayari',
          storytext:
            'He has been living in exile in Montreal since 2016. An activist and spokesperson in the LGBTQ+ community, he fled his country because it was no longer safe for him to keep fighting for the cause. Here, he reflects on an activist journey that has been anything but ordinary.',
          country: 'Tunisia',
          created_at: '2019-06-06T02:38:57.624Z',
          updated_at: '2019-06-06T02:38:57.624Z',
        },
        {
          id: 6,
          title: "Yaser's Story",
          name: 'Yaser',
          storytext:
            "For two long years Yaser's* five children, Ali*, 15, Achmed*, 14, Hala*, 10, Sedra*, 7 and Aya*, 3, have not been able to go to school or play outside. Violence kept them from living a normal life. There was constant fear of sniper and missile attacks. They learned what type of weapon was being used just by the sound it made.",
          country: 'Belgium',
          created_at: '2019-06-06T02:39:14.668Z',
          updated_at: '2019-06-06T02:39:14.668Z',
        },
        {
          id: 7,
          title: 'One Sad Dark Night',
          name: 'Walaa',
          storytext:
            'A 17-year-old Syrian refugee living in East Amman, Jordan. She learned English at school and wrote this article in English to mark 1000th day of the Syrian conflict.',
          country: 'Syria',
          created_at: '2019-06-06T02:39:30.586Z',
          updated_at: '2019-06-06T02:39:30.586Z',
        },
        {
          id: 8,
          title: 'Story of A “White Russian” woman',
          name: ' Tania Marcotty Dolenga',
          storytext:
            'Tania Marcotty Dolenga is from an illustrious family of Russian aristocrats. She was born a Countess in 1929. At 88 years old, from the USA, that she shares her story of escaping the Bolshevik Revolution. The wars of the twentieth century forced her, as a child, to transform and reshape her identity again and again.',
          country: 'Russia',
          created_at: '2019-06-06T02:39:41.085Z',
          updated_at: '2019-06-06T02:39:41.085Z',
        },
        {
          id: 9,
          title: 'test9',
          name: 'author9',
          storytext: 'story 9',
          country: 'usa',
          created_at: '2019-06-06T02:40:00.894Z',
          updated_at: '2019-06-06T02:40:00.894Z',
        },
        {
          id: 10,
          title: 'test10',
          name: 'author10',
          storytext: 'story10',
          country: 'usa',
          created_at: '2019-06-06T02:40:15.579Z',
          updated_at: '2019-06-06T02:40:15.579Z',
        },
      ]);
    });
};
