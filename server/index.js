// index.js
// server
// functions:
//   addBug WIP
//   deleteBug tbd
//   filterBugsByThreat tbd
//   getAllBugs WIP
//   getBug WIP
//   updateBugThreatLevel WIP

const express = require('express');
const app = express();

const bp = require('body-parser');
app.use(bp.json());

const pool = require('./db/queries');

const port = 3000;

console.log('Beginning of index.js')



// addBug
app.post('/bugtracker', (req, res) => {
  console.log("i: aB: p: r.b: ", req.body);
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
  console.log("i: dB: d: r.p.i: ", req.params.id);
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
  console.log("i: fBBTL: g: r.p.i", req.params.id);
  console.log("i: fBBTL: g: r.b.t_l", req.body.threat_level);
  // pool.filterBugsByThreatLevel(req.params.id, req.body.threat_level)
  pool.filterBugsByThreatLevel(req.body.threat_level)
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
  console.log("i: gAB: g()");
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
  console.log("i: gB: g: r.p.i", req.params.id);
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

// getBugBTL
// app.get('/bugtracker/:threat_level', (req, res) => {
//   console.log("i: gBBTL: r.p.i: ", req.params.id)
//   pool.getBug(req.params.id)
//     .then(results => res.send(results))
//     // .then(result => {
//     //   console.log(result);
//     //   res.sendStatus(201)
//     // })
//     // .catch(error=>{
//     //   console.log(error);
//     //   res.status(400).end()
//     //   })
//   });

    // updateBugThreatLevel
app.put('/bugtracker/:threat_level', (req, res) => {
  // console.log("i: id, threat_level: ", req.params.id, req.body.threat_level)
  console.log("i: uBTL: p: r.p.i: ", req.params.id)
  console.log("i: uBTL: p: t.b.t_l: ", req.body.threat_level)
  pool.updateBugThreatLevel(req.params.id, req.body.threat_level)
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
