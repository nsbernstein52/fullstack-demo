// index.js
// server
// functions:
//   addBug WIP
//   deleteBug tbd
//   getAllBugs WIP
//   getBug WIP
//   filterBugsByThreat tbd

const express = require('express');
const app = express();

const bp = require('body-parser');
app.use(bp.json());

const pool = require('./db/queries');

const port = 3000;

// addBug
app.post('/api/bugtracker', (req, res) => {
  pool.addBug(req.body)
      .then(result => {
        console.log(result);
        res.sendStatus(201)
      })
      .catch(error=>{
        console.log(error);
        res.status(400).end()
      })
});

// getAllBugs
app.get('/api/bugtracker', (req, res) => {
  pool.getAllBugs()
      .then(result => {
        console.log(result);
        res.sendStatus(201)
      })
      .catch(error=>{
        console.log(error);
        res.status(400).end()
      })
});

// getBug
app.get('/api/messages/:id', (req, res) => {
  pool.getBug(req.params.id)
    .then(result => {
      console.log(result);
      res.sendStatus(201)
    })
    .catch(error=>{
      console.log(error);
      res.status(400).end()
      })
});


module.exports = app;

//  original code

// const express = require('express');
