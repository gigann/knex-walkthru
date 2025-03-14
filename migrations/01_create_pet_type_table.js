exports.up = function(knex) {
    return knex.schema
        .createTable('pet_type', table => {
            table.increments('id');
            table.string('name').notNullable();
        });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('pet_type');
};
