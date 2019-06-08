const router = require('express').Router();
const db = require('../../database/dbConfig');
const makeCrudMethods = require('../../utils/makeCrudMethods');
const makeCrudRoutes = require('../../utils/makeCrudRoutes');

const handlers = makeCrudMethods(db, 'comments');
makeCrudRoutes(router, handlers);

module.exports = router;
