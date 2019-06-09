const createCrudRoutes = (router, handlers) => {
  const { find, findById, create, update, remove } = handlers;
  find && router.get('/', find);
  create && router.post('/', create);
  findById && router.get('/:id', findById);
  update && router.delete('/:id', remove);
  remove && router.put('/:id', update);
};

module.exports = createCrudRoutes;
