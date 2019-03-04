const pgp = require('pg-promise')({});
const db = pgp('postgres://localhost:5432/personal_project_endeavernote')

module.exports = db 
