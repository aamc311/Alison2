/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.table('empleado', function(table){
        table.string('apellido');
        table.string('genero');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.table('empleado',function(table){
        table.dropColumn('apellido');
        table.dropColumn('genero');
    });
};
