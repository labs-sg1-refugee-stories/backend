const router = require('express').Router();
const db = require('../../database/dbConfig');
const createCrudMethods = require('../../utils/createCrudMethods');
const createCrudRoutes = require('../../utils/createCrudRoutes');

const handlers = createCrudMethods(db, 'comments');
createCrudRoutes(router, handlers);

module.exports = router;
