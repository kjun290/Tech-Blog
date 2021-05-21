const router = require('express').Router();
const apiRoute = require('.api/');
const homeRoute = require('./home-routes.js');

router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);

module.exports = router;