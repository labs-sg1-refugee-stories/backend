//* Creates http CRUD handlers

module.exports = (db, table) => ({
  find(req, res, next) {
    db(table)
      .then(items => res.status(200).json(items))
      .catch(next);
  },

  create(req, res, next) {
    db(table)
      .insert(req.body)
      .returning('*')
      .then(inserted => {
        res.status(201).json(inserted);
      })
      .catch(next);
  },

  findById(req, res, next) {
    const { id } = req.params;
    db(table)
      .where({ id })
      .then(item => res.status(200).json(item))
      .catch(next);
  },

  update(req, res, next) {
    const { id } = req.params;
    db(table)
      .where({ id })
      .update(req.body)
      .returning('*')
      .then(updated => res.status(200).json(updated))
      .catch(next);
  },

  remove(req, res, next) {
    const { id } = req.params;
    db(table)
      .where({ id })
      .delete()
      .then(count => res.status(200).json(count))
      .catch(next);
  },
});
