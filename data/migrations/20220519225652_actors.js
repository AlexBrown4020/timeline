/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  return await knex.schema
  .createTable("actors", function(table) {
      table.increments("id")
      .primary()
      .unsigned()
      .notNullable();
      table.string("name", 64);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  return await knex.schema
  .dropTable("actors");
};
