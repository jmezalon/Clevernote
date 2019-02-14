const express = require('express');
const router = express.Router();
const { getAllUsers, getSingleUser, getUserNotebooks, createUser, deleteUser, updateUser } = require('../db/queries/userQueries');

router.get('/', getAllUsers);

router.get('/:id', getSingleUser);

router.get('/:id/notebooks', getUserNotebooks);

router.post('/', createUser);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);




module.exports = router;
