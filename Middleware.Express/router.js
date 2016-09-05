const express = require('express');
const router  = express.Router();
const userRequireMiddleware = require('./user-require.middleware');
const userController	    = require('./users.controller');
const userNameNotExistedMiddleware = require('./username-notexisted.middleware');

router.get('/users/add', userController.addForm);	 
router.post('/users', userNameNotExistedMiddleware, userController.add);
router.get('/users', userController.list);
router.get('/users/:id', userRequireMiddleware, userController.detail);
router.get('/users/delete/:id', userController.delete);
router.get('/users/update/:id', userNameNotExistedMiddleware, userRequireMiddleware, userController.updateForm);
router.post('/users/update/:id', userController.update);

module.exports = router;

