const express = require('express');
const router = express.Router();
const { getAllNotes, getOneNote, createNote, editNote, deleteNote } = require('../db/queries/noteQueries');

router.get('/', getAllNotes);

router.get('/:id', getOneNote);

router.post('/', createNote);

router.patch('/:id', editNote);

router.delete('/:id', deleteNote);





module.exports = router;
