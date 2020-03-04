// create db
const { Pool } = require('pg');

const pool = new Pool ({
  database: 'bugTracking',
  user: 'postgres',
  password: 'P2020'
})

// INSERT INTO table_name (column_names ...) VALUES ('val1', val2', ...) 
const addBug = (bugs) => {
  let values = [
    req.body.description, 
    req.body.reported_by,
    req.body.created_date,
    req.body.assigned_to,
    req.body.bugs.threat_level
  ]
  return pool.query('INSERT INTO bugs (bug_description, reported_by, created_date, assigned_to, threat_level)  VALUES ($1, (SELECT id FROM users WHERE user_name = $2), $3, (SELECT id FROM users WHERE user_name = $4), $5)', values)
    .then(() => true);
};

// DELETE FROM table_name WHERE condition; ???
const deleteBug = (id) => {
  let value = [id]
  return pool.query('DELETE FROM bugs WHERE id = $1', value)
      .then(() => true)
};

// SELCT * FROM table_name
const getAllBugs = () => {
  return pool.query('SELECT * FROM bugs')
    .then(res => {
      console.log(res.rows);
      return res.rows;
    })
};

// SELCT * FROM table_name WHERE value = column
const getBug = (id) => {
  let values = [id]
  return pool.query(`SELECT * FROM bugs WHERE $1 = id`, values)
    .then(res => res.rows)
};

req.body.description, 
req.body.reported_by,
req.body.created_date,
req.body.assigned_to,
req.body.bugs.threat_level

// UPDATE table SET column = <newVal> WHERE condition; ???
const updateBug = (messages) => {
  let values = [req.params.id, req.body.description, req.body.reported_by, req.body.created_date, req.body.assigned_to, req.body.threat_level ]
  return pool.query('UPDATE bugs SET assigned_to = $5 WHERE id = $1', values)
      .then(() => true)
};

module.exports = {
  pool,
  addBug,
  deleteBug,
  getAllBugs,
  getBug,
  updateBug
}
