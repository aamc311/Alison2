/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.table('producto', function(table){
        table.string('marca');
        table.string('fecha_caduca');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.table('producto',function(table){
        table.dropColumn('marca');
        table.dropColumn('fecha_caduca');
    });
};
