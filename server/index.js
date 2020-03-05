// index.js
// server
// functions:
//   addBug WORKING!
//   deleteBug WORKING!
//   filterBugsByThreatLevel WORKING!
//   getAllBugs WORKING!
//   getBug WORKING!
//   updateBugThreatLevel WIP

const express = require('express');
const app = express();

const bp = require('body-parser');
app.use(bp.json());

const pool = require('./db/queries');

const port = 3000;

console.log('Beginning of index.js')



// addBug WORKING!
app.post('/bugtracker', (req, res) => {
  // console.log("i: aB: p: r.b: ", req.body); // for use with client, eg, object
  // console.log("i: aB: p: r.p: ", req.params);// for use for route
  console.log("i: aB: p: r.q: ", req.query); // 
  // pool.addBug(req.body) // for use with client, eg, object
  // pool.addBug(req.params) // for use for route
  pool.addBug(req.query) // for use porbably only with postman (query) params
    // .then(results => res.send(results))
    .then(result => {
        console.log(result);
        res.sendStatus(201)
      })
    .catch(error => {
      console.log(error);
      res.status(400).end()
      })
});

// deleteBug  WORKING!
app.delete('/bugtracker/:id', (req, res) => {
  console.log("i: dB: d: r.p.i: ", req.params.id);
  return pool.deleteBug(req.params.id)
  .then(results => res.send(results))
  // .then(() => res.sendStatus(201))
  //     .catch(error=>{
  //       console.log(error);
  //       res.status(400).end()
  //     })
});

// filterBugsByThreatLevel WORKING!
app.get('/bugtracker/bugs/:threat_level', (req, res) => {
// app.get('/bugtracker/', (req, res) => {
  // console.log("i: fBBTL: g: t_l", threat_level);
  // console.log("i: fBBTL: g: r.p.i", req.params.id);
  // console.log("i: fBBTL: g: r.b.t_l", req.body.threat_level);
  console.log("i: fBBTL: g: r.p.i", req.params.threat_level);
  // pool.filterBugsByThreatLevel(req.params.id, req.body.threat_level)
  // pool.filterBugsByThreatLevel(req.body.threat_level)
  pool.filterBugsByThreatLevel(req.params.threat_level)
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


// getAllBugs WORKING!
app.get('/bugtracker', (req, res) => {
  console.log("i: gAB: g()");
  pool.getAllBugs()
    // .then(results => res.send(results))
    .then(result => {
      console.log("i: gAB: result[0]: ", result[0]);
      res.sendStatus(201) // code
      res.send(result.rows) // code + data
      .end()
        // console.log(result);
    })
    .catch(err => {
      console.error(err);
      res.status(400)
      .end()
    })
});

// getBug WORKING!
app.get('/bugtracker/:id', (req, res) => {
  console.log("i: gB: g: r.p.i", req.params.id);
  pool.getBug(req.params.id)
    // .then(results => res.send(results))
    .then(result => {
      console.log(result);
      res.sendStatus(201)
    })
    .catch(error=>{
      console.log(error);
      res.status(400).end()
      })
});

    // updateBugThreatLevel WORKING!
    // postman /bugtracker/bugs/None?id=12
    app.put('/bugtracker/bugs/:threat_level', (req, res) => {
  console.log("i: uBTL: p: r.p.t_l: ", req.params.threat_level);
  console.log("i: uBTL: p: r.q: ", req.query);
  pool.updateBugThreatLevel(req.query.id, req.params.threat_level)
    .then(results => res.send(results))
    // .then(results => {
    //     res.send(results);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //     res.status(400).end()
    //   })
});

app.listen(3000, () => {console.log('End of index.js. Server is running port 3000')}); 

//  original code

// const express = require('express');
