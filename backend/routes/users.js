const express = require('express');
const router = express.Router();
const passport = require("../auth/local");
const { loginRequired } = require("../auth/helpers")
const { getAllUsers, getSingleUser, getUserNotebooks, logoutUser, isLoggedIn, loginUser, createUser, deleteUser, updateUser } = require('../db/queries/userQueries');

router.get('/', getAllUsers);

router.get('/isLoggedIn', isLoggedIn);

router.post('/signup', createUser);

router.post('/login', passport.authenticate("local", {}), loginUser);

router.post('/logout', loginRequired, logoutUser);

router.get('/:id', getSingleUser);

router.get('/:id/notebooks', getUserNotebooks);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);



module.exports = router;
