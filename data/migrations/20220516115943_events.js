/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  return await knex.schema
  .createTable('events', function(table) {
      table.integer('id')
      .unsigned()
      .notNullable()
      .primary();
      table.string('title', 64);
      table.string('description', 264);
      table.date('date');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  return await knex.schema
  .dropTable('events');
};
