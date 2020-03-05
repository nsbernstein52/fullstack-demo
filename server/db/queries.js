// queries.js
// create db
// functions
//   addBug tbd
//   deleteBug tbd
//   filterBugsByThreatLevel tbd
//   getAllBugs tbd
//   getBug tbd
//   updateBugThreatLevel tbd


const { Pool } = require('pg');

const pool = new Pool ({
  database: 'bugtracker',
  user: 'postgres',
  password: 'Psa2020s'
})

console.log('Connected to DB. At beginning of queries functions');

// INSERT INTO table_name (column_names ...) VALUES ('val1', val2', ...) 
const addBug = (bugs) => {
  let values = [
    bugs.description, 
    bugs.reported_by,
    bugs.created_date,
    bugs.assigned_to,
    bugs.threat_level
  ]
  // return pool.query('INSERT INTO bugs (bug_description, reported_by, created_date, assigned_to, threat_level)  VALUES ($1, (SELECT id FROM users WHERE user_name = $2), $3, (SELECT id FROM users WHERE user_name = $4), $5)', values)
  return pool.query('INSERT INTO bugs (bug_description, reported_by, created_date, assigned_to, threat_level)  VALUES ($1, $2, $3, $4, $5)', values)
    .then(() => true)
    .catch(err => console.log(err));
};

// DELETE FROM table_name WHERE condition;
const deleteBug = (id) => {
  // console.log("entering dB:", id);
  let values = [id]
  return pool.query('DELETE FROM bugs WHERE id = $1', values)
      .then(() => true)
};

// SELECT * FROM table_name WHERE value = column
const filterBugsByThreatLevel = (threat_level) => {
  let values = [threat_level]
  return pool.query(`SELECT * FROM bugs WHERE $1 = threat_level`, values)
    .then(res => res.rows)
};

// SELECT * FROM table_name
const getAllBugs = () => {
  console.log('Entering gAB')
  return pool.query('SELECT * FROM bugs') 
    .then(res => {
      console.log(res.rows);
      return res.rows;
    })
};

// SELECT * FROM table_name WHERE value = column
const getBug = (id) => {
  let values = [id]
  return pool.query(`SELECT * FROM bugs WHERE $1 = id`, values)
    .then(res => res.rows)
};

// UPDATE table SET column = <newVal> WHERE condition; ???
const updateBugThreatLevel = (bugs) => {
  let values = [req.params.id, req.body.threat_level ]
  return pool.query('UPDATE bugs SET threat_level = $2 WHERE id = $1', values)
      .then(() => true)
};

console.log('At end of queries functions');

module.exports = {
  // pool,
  addBug,
  deleteBug,
  filterBugsByThreatLevel,
  getAllBugs,
  getBug,
  updateBugThreatLevel
}
