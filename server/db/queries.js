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
  console.log("q: aB: bugs:", bugs);
  let values = [
    bugs.bug_description, 
    bugs.reported_by,
    bugs.created_date,
    bugs.assigned_to,
    bugs.threat_level
  ]
  return pool.query('INSERT INTO bugs (bug_description, reported_by, created_date, assigned_to, threat_level)  VALUES ($1, $2, $3, $4, $5)', values)
    // .then(() => true)
    // .catch(err => console.log(err));
    .then(result => {
      console.log("q: aB: COMPLETED SUCCESSFULLY");
      return result;
    })
    // .end() express, not pg!
    .catch(err => {
      console.error(err);
      res.status(400)
    // .end() express, not pg!
  })
};

// DELETE FROM table_name WHERE condition;
const deleteBug = (id) => {
  console.log("q: dB: i:", id);
  let values = [id]
  return pool.query('DELETE FROM bugs WHERE id = $1', values)
    // .then(() => true)
    .then(result => {
      console.log("q: dB: COMPLETED SUCCESSFULLY");
      return result;
    })
    .catch(err => {
      console.error(err);
      res.status(400)
  })  
};

// SELECT * FROM table_name WHERE value = column
const filterBugsByThreatLevel = (threat_level) => {
  console.log("q: fBBTL: t_l:", threat_level);
  let values = [threat_level]
  return pool.query(`SELECT * FROM bugs WHERE $1 = threat_level`, values)
    // .then(res => res.rows)
    .then(result => {
      console.log("q: fBBTL: r.r", result.rows[0]);
      return result.rows;
    })
    .catch(err => {
      console.error(err);
      res.status(400)
  })
};

// SELECT * FROM table_name
const getAllBugs = () => {
  console.log("q: gAB: ");
  return pool.query('SELECT * FROM bugs') 
    .then(result => {
      console.log("q: gAB: r.r", result.rows[1]);
      return result.rows;
    })
    // .end() express, not pg!
    .catch(err => {
      console.error(err);
      res.status(400)
    // .end() express, not pg!
  })
};

// SELECT * FROM table_name WHERE value = column
const getBug = (id) => {
  console.log("q: gB: i:", id);
  let values = [id]
  return pool.query(`SELECT * FROM bugs WHERE $1 = id`, values)
    // .then(res => res.rows)
    .then(result => {
      console.log("q: gB: COMPLETED SUCCESSFULLY");
      return result.rows[0];
    })
    .catch(err => {
      console.error(err);
      res.status(400)
  })
};

// UPDATE table SET column = <newVal> WHERE condition; ???
const updateBugThreatLevel = (id, threat_level) => {
  console.log('q: uPBTL: i, t_l: ', id, threat_level)
  let values = [id, threat_level ]
  return pool.query('UPDATE bugs SET threat_level = $2 WHERE id = $1', values)
    // .then(() => true)
    .then(result => {
      console.log("q: uBTL: COMPLETED SUCCESSFULLY");
      return result;
    })
    .catch(err => {
      console.error(err);
      res.status(400)
    })
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
