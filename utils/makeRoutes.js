//* Creates standard CRUD routes if method exist inside of handlers

module.exports = (router, handlers) => {
  //* Destructures methods
  const { find, findById, create, update, remove } = handlers;
  //* Creates routes if method exist
  find && router.get('/', find);
  create && router.post('/', create);
  //* Following methods expect id on req.params
  findById && router.get('/:id', findById);
  update && router.delete('/:id', remove);
  remove && router.put('/:id', update);
};
