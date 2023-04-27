
const mysqlConnection = require('./database')
const express = require('express')
const bodyParser = require('body-parser')


const app = express()

app.use(bodyParser.json());

app.get("/query",  (req,res)=>{
  const mysqlQuery =  req.body.mysqlQuery;
    mysqlConnection.query(mysqlQuery,(err,rows)=>{
      if(err) {
        console.log('err from app.js '+err)
      } else {
        console.log(rows)
        res.send(JSON.stringify(rows[0]))  
      }
   })
})

app.post('/query', (req, res) => {
  const mysqlQuery = req.body.mysqlQuery;
  mysqlConnection.query(mysqlQuery,(err,rows)=>{
    if(err) {
      console.log('err from app.js '+err)
    } else {
      console.log(JSON.stringify(rows))
      res.send(JSON.stringify(rows)) 
      // res.send("POST Request Recevied: affectedRows = "+ JSON.stringify(rows.affectedRows))  
    }
 })
})


app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })

app.listen(5000,()=>{
    console.log('server is running on port 5000');
  })



