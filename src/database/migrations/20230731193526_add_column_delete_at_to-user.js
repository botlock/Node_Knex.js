exports.up = function (knex) {
    return knex.schema.alterTable("users", function (table) {
  table.timestamp("deleted_at")
  
    });
  };
  
  exports.down = function (knex) {
    knex.schema.alterTable("users", table => {
        table.dropColumn("delete_at")
    })
  }
  ;
  