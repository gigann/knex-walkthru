exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('food_type').del()
  await knex('food_type').insert([
    { id: 1, name: 'dog kibble', description: 'Crunchy dog food' },
    { id: 2, name: 'canned cat food', description: 'Wet cat food in a can with a high water-content' },
    { id: 3, name: 'bird seed', description: 'A mixture of millet, sunflower seeds, corn, and misc. grains' },
    { id: 4, name: 'fish pellets', description: 'A large tin of fish food pellets' },
  ]);
};
