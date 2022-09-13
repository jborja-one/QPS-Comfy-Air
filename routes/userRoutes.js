const express = require('express');
const {
	authUser,
	logoutUser,
	registerUser,
	getUsers,
} = require('../controllers/userController');

const router = express.Router();

router.post('/login', authUser);
router.get('/logout', logoutUser);
router.route('/').post(registerUser).get(getUsers);

module.exports = router;
