exports.up = function(knex) {
    return knex.schema
        .createTable('food_type', table => {
            table.increments('id');
            table.string('name').notNullable();
            table.string('description').notNullable();
        });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('food_type');
};