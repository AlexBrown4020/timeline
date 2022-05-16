/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('events').del()
  await knex('events').insert([
    {id: 1, title: 'CCP4 starts Code Chyrsalis', description: 'Students begin their journey, starting with an introductory lesson', date: new Date('2022-02-15')},
    {id: 2, title: 'Start of laundry week', description: 'Students have a week break to relax, study or catch up', date: new Date('2022-04-12')},
    {id: 3, title: 'Solo MVP', description: 'Everyone works on their first, full-stack solo app!', date: new Date('2022-05-17')},
    {id: 4, title: 'ANTS', description: 'THERE ARE WAY TOO MANY ANTS RIGHT NOW, LIKE, SERIOUSLY, SO MANY ANTS.', date: new Date('2022-05-31')},
  ]);
};
