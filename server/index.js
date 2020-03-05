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

console.log('Beginning of index.js')



// addBug
app.post('/bugtracker', (req, res) => {
  return pool.addBug(req.body)
    .then(results => res.send(results))
    // .then(result => {
    //     console.log(result);
    //     res.sendStatus(201)
    //   })
    //   .catch(error=>{
    //     console.log(error);
    //     res.status(400).end()
    //   })
});

// deleteBug
app.delete('/bugtracker/:id', (req, res) => {
  return pool.deleteBug(req.params.id)
  .then(results => res.send(results))
  // .then(() => res.sendStatus(201))
  //     .catch(error=>{
  //       console.log(error);
  //       res.status(400).end()
  //     })
});

// filterBugsByThreatLevel
app.get('/bugtracker/:threat_level', (req, res) => {
  pool.filterBugsByThreatLevel(req.params.id, req.body.threat_level)
    .then(results => res.send(results))
    // then( (result) => ({
    //     console.log(result);
    //     res.sendStatus(201)
    //     // console.log(result.rows);
    //     // res.send(result.rows).end()
    //   }))
    //   catch(error=>{
    //     console.log(error);
    //     res.status(400).end()
    //   })
});


// getAllBugs
app.get('/bugtracker', (req, res) => {
  pool.getAllBugs()
    .then(results => res.send(results))
    // then( (result) => ({
    //     console.log(result);
    //     res.sendStatus(201)
    //     // console.log(result.rows);
    //     // res.send(result.rows).end()
    //   }))
    //   catch(error=>{
    //     console.log(error);
    //     res.status(400).end()
    //   })
});

// getBug
app.get('/bugtracker/:id', (req, res) => {
  pool.getBug(req.params.id)
    .then(results => res.send(results))
    // .then(result => {
    //   console.log(result);
    //   res.sendStatus(201)
    // })
    // .catch(error=>{
    //   console.log(error);
    //   res.status(400).end()
    //   })
});

// getBug
app.get('/bugtracker/:threat_level', (req, res) => {
  pool.getBug(req.params.id)
    .then(results => res.send(results))
    // .then(result => {
    //   console.log(result);
    //   res.sendStatus(201)
    // })
    // .catch(error=>{
    //   console.log(error);
    //   res.status(400).end()
    //   })
  });

    // updateBugByThreatLevel
app.get('/bugtracker/:threat_level', (req, res) => {
  // console.log(req.params, req.body)
  pool.updateBugByThreatLevel(req.params.id, req.body.threat_level)
    .then(results => res.send(results))
    // .then(results => {
    //     res.send(results);
    //   })
    //   .catch(error=>{
    //     console.log(error);
    //     res.status(400).end()
    //   })
});

app.listen(3000, () => {console.log('End of index.js. Server is running port 3000')}); 

//  original code

// const express = require('express');
