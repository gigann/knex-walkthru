exports.up = function(knex) {
    return knex.schema
        .createTable('pet', table => {
            table.increments('id');
            table.string('name').notNullable();
            table.integer('pet_type_id');
            table.foreign('pet_type_id').references('pet_type.id');
    });
};

exports.down = function(knex) {
    return knex.schema
        .alterTable('pet', table => {
            table.dropForeign('pet_type_id');
        })
        .then((function () {
            return knex.schema.dropTableIfExists('pet');
        }));
};
