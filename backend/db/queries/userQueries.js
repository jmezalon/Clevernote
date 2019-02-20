const { db } = require('./index.js');
// const authHelpers = require("../auth/helpers.js");


const getAllUsers = (req, res, next) => {
  db.any('SELECT * FROM users')
  .then(users => {
    res.status(200)
    .json({
      status: 'success',
      users: users,
      message: 'This is all the users'
    })
  })
  .catch(err => next(err, "this is for all notebooks"));
};

const getSingleUser = (req, res, next) => {
  let userId = req.params.id;
  db.one('SELECT * FROM users WHERE id=$1', userId)
  .then((user) => {
    res.status(200)
    .json({
      status: 'success',
      user: user,
      message: 'this is ONE user'
    })
  })
  .catch(err => next(err));
}


const getUserNotebooks = (req, res, next) => {
  let userId = req.params.id
  console.log(userId);
  db.any('SELECT * FROM notebooks WHERE user_id=$1', userId)
  .then(notebook => {
    res.status(200)
    .json({
      status: 'success',
      notebook: notebook,
      message: 'this is all the notebooks from this user'
    })
  })
  .catch(err => next(err));
}


const createUser = (req, res, next) => {
  const hash = authHelpers.createHash(req.body.password);


  req.body.profile_pic = req.body.profile_pic ? parseInt(req.body.profile_pic) : null
  //ask about TIMESTAMP
  db.none('INSERT INTO users(email, profile_pic, password_digest) VALUES(${email}, ${profile_pic}, ${password})', { email: req.body, password: hash })
  .then(() => {
    res.status(200)
    .json({
      status: 'success',
      message: 'you added a new user'
    })
  })
  .catch(err => {
    res.status(500).json({
      message: err
    })
  });
}

function logoutUser(req, res, next) {
  req.logout();
  res.status(200).send("log out success");
}

function loginUser(req, res) {
  res.json(req.user);
}

function isLoggedIn(req, res) {
  if (req.user) {
    res.json({ username: req.user });
  } else {
    res.json({ username: null });
  }
}

const deleteUser = (req, res, next) => {
  let userId = parseInt(req.params.id);
  db.result('DELETE FROM users WHERE id=$1', userId)
  .then(result => {
    res.status(200)
    .json({
      status: 'success',
      message: 'you deleted this user',
      result: result
    })
  })
  .catch(err => next(err));
}

const updateUser = (req, res, next) => {
  let queryStringArray = [];
  let bodyKeys = Object.keys(req.body);
  bodyKeys.forEach(key => {
    queryStringArray.push(key + "=${" + key + "}");
  });
  let queryString = queryStringArray.join(", ")
  db.none(
      'UPDATE users SET ' + queryString + ' WHERE id=' + req.params.id, req.body
    )
    .then(() => {
      res.status(200)
      .json({
        status: "success",
        message: "Updated a user!"
      });
    })
    .catch(err => next(err));
};


module.exports = { getAllUsers, getSingleUser, getUserNotebooks, createUser, deleteUser, logoutUser, loginUser, isLoggedIn, updateUser };
