const express = require('express');
const router = express.Router();

const controllers = require('../controllers/adminControllers');

router.get('/', controllers.adminView);
router.get('/create', controllers.createView);
router.post('/create', controllers.createItem);

router.get('/edit/:id', controllers.editView);
router.post('/edit/:id', controllers.editItem);

router.get('/delete/:id', controllers.deleteItem);

router.get('/login', controllers.loginView);
router.post('/login', controllers.loginUser);

router.get('/register', controllers.registerView);
router.post('/register', controllers.registerUser);

module.exports = router;