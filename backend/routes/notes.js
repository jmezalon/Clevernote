const express = require('express');
const router = express.Router();
const { getAllNotes, getOneNote, createNote, editNote, deleteNote } = require('../db/queries/noteQueries');

router.get('/:id', getAllNotes);

router.get('/:id', getOneNote);

router.post('/:id', createNote);

router.patch('/:id', editNote);

router.delete('/:id', deleteNote);





module.exports = router;
