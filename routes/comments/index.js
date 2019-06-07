const router = require('express').Router();
const db = require('../../database/dbConfig');
const makeCrudMethods = require('../../utils/makeCrudMethods');
const makeRoutes = require('../../utils/makeRoutes');

const handlers = makeCrudMethods(db, 'comments');
makeRoutes(router, handlers);

module.exports = router;
