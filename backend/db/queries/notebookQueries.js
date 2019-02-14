const { db } = require('./index.js');


const getAllNotebooks = (req, res, next) => {
  db.any('SELECT * FROM notebooks')
  .then(notebooks => {
    res.status(200)
    .json({
      status: 'success',
      notebooks: notebooks,
      message: 'This is all your notebooks'
    })
  })
  .catch(err => next(err, "this is for all notebooks"));
}


const getSingleNotebook = (req, res, next) => {
  let notebookId = req.params.id;
  db.one('SELECT * FROM notebooks WHERE id=$1', notebookId)
  .then((notebook) => {
    res.status(200)
    .json({
      status: 'success',
      notebook: notebook,
      message: 'this is ONE notebook'
    })
  })
  .catch(err => next(err));
}

const getAllNotesFromOneNotebook = (req, res, next) => {
  let noteId = req.params.id
  db.any('SELECT * FROM notes WHERE notebook_id=$1', noteId)
  .then(notes => {
    res.status(200)
    .json({
      status: 'success',
      notes: notes,
      message: 'this is all the notes from your notebook'
    })
  })
  .catch(err => next(err));
}


const createNotebook = (req, res, next) => {
  req.body.user_id = req.body.user_id ? parseInt(req.body.user_id) : null
  // should we have created_at in the insert below and if we do have it how do we add the TIMESTAMP
  db.none('INSERT INTO notebooks(notebook_type, user_id) VALUES(${notebook_type}, ${user_id})', req.body)
  .then(() => {
    res.status(200)
    .json({
      status: 'success',
      message: 'you added a new notebook'
    })
  })
  .catch(err => next(err));
}


const updateNotebook = (req, res, next) => {
  let queryStringArray = [];
  let bodyKeys = Object.keys(req.body);
  bodyKeys.forEach(key => {
    queryStringArray.push(key + "=${" + key + "}");
  });
  let queryString = queryStringArray.join(", ")
  db.none(
      'UPDATE notebooks SET ' + queryString + ' WHERE id=' + req.params.id, req.body
    )
    .then(() => {
      res.status(200)
      .json({
        status: "success",
        message: "Updated a notebook!"
      });
    })
    .catch(err => next(err));
};

const deleteNotebook = (req, res, next) => {
  let notebookId = parseInt(req.params.id);
  db.result('DELETE FROM notebooks WHERE id=$1', notebookId)
  .then(result => {
    res.status(200)
    .json({
      status: 'success',
      message: 'you deleted this notebook',
      result: result
    })
  })
  .catch(err => next(err));
}

module.exports = { getAllNotebooks, getSingleNotebook, getAllNotesFromOneNotebook, createNotebook, updateNotebook , deleteNotebook };
