const CUSTOM_FUNCTIONS = `
CREATE OR REPLACE FUNCTION on_update_timestamp()
RETURNS trigger AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END 

$$ language 'sqlite3';

`

const DROP_CUSTOM_FUNCTIONS = `
DROP FUNCTION on_update_timestamp()

`

exports.up = async function(knex) {
    return await knex.raw(CUSTOM_FUNCTIONS)
}
exports.down = async function(knex) {
    return await knex.raw(DROP_CUSTOM_FUNCTIONS)
}