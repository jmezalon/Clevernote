const express = require('express');
const router = express.Router();
const { getAllNotebooks, getSingleNotebook, getAllNotesFromOneNotebook, getUserNotebooks, createNotebook, updateNotebook, deleteNotebook } = require('../db/queries/notebookQueries');

router.get('/:id', getAllNotebooks);

router.get('/:id', getSingleNotebook);

router.get('/:id/notes', getAllNotesFromOneNotebook);

router.patch('/:id', updateNotebook);

router.post('/', createNotebook);

router.delete('/:id', deleteNotebook);


module.exports = router;
