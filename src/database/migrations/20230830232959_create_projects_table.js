const { onUpdateTrigger } = require("../../../knexfile");

exports.up = async function (knex) {
    return knex.schema.createTable("projects", function (table) {
      table.increments("id")
      table.text("title")


      //relations 
      table.integer("user_id").references("users.id").notNull().onDelete("CASCADE")
      table.timestamp(true,true)
  
  
    }).then(() => knex.raw(onUpdateTrigger("users")));
  };
  
  exports.down = async function (knex) {
      return knex.schema.dropTable("users")
  };
  