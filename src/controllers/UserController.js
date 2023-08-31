const knex = require("../database");

module.exports = {
  async index(req, res) {
    const results = await knex("users").where("deleted_at", null)

    return res.status(200).json(results);
  },


  async show(req, res,next) {
    try {
      const {id} = req.params 
      const results = await knex("users").where({id});
  
      return res.status(200).json(results);
    } catch (error) {
      next(error)
    }
   
  },

  async create(req, res, next) {
    try {
      const { username } = req.body;

      await knex("users").insert({
        username,
      });

      console.log(username);

      return res.status(201).send("Usuario cadastrado com sucesso");
    } catch (error) {
      next(error);
    }
  },

  async update(req, res, next) {
    try {
      const { id } = req.params;

      const { username } = req.body;

      await knex("users").update({ username }).where({ id });

      return res.send("Usuario atualizado com sucesso");
    } catch (error) {
      next(error);
    }
  },

  async delete(req, res, next) {
    try {
      const { id } = req.params;

      await knex("users")
      .where({ id })
      .update("deleted_at", new Date.now())
      ;

      return res.send("Usuario excluido com sucesso");
    } catch (error) {
      next(error);
    }
  },
};
