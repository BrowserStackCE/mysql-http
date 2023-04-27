
const mysql = require('mysql2')


  /* Setup Database */
 const mysqlConnection  = mysql.createConnection({
    connectionLimit:10,
    host:"127.0.0.1",
    user:"root",
    password:"Browserstack@123",
    database: "Demo1"
})

mysqlConnection.connect((err)=>{
  if(err){
    console.log('error in DB connection'+ JSON.stringify(err,undefined,2))
  } else {
    console.log('DB connected succesfully');
  }
})
 

module.exports = mysqlConnection





