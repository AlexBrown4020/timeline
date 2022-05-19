/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('actors').del()
  await knex('actors').insert([
    {name: 'Alex'},
    {name: 'JP'},
    {name: 'Matt'},
    {name: 'Ravi'},
    {name: 'Eric'},
    {name: 'May'},
    {name: 'Yuka'},
  ]);
};
