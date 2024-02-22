const mysql = require("mysql2")
const express = require('express')
const app = express()
const port = 3000


const pool = mysql.createPool({
    connectionLimit: 5,
    host: "localhost",
    user: "root",
    database: "chessTournament",
    password: ""
});


app.get('/Federation', function (req, res) {
    pool.query("SELECT * FROM  Federation" + req.params.id, (err, data) => {
        if(err) return  console.log(err);
        res.json( {
            Federation: data
        });
    });
  });

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })