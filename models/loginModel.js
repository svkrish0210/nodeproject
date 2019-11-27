'use strict';
const { Client } = require('pg')

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'krishna',
  password: 'admin',
  port: 5433,
})

client.connect();

exports.selectusers =async function (username,password) {
try{

 let query=await client.query('SELECT * FROM USER_DETAILS WHERE USERNAME = $1 AND PASSWORD = $2', [username, password]);

  return query.rows; 
}catch(err){
console.log(err);
}
  };


  exports.listVehicles =async function () {
    try{
    
      //let query=await pool.query('SELECT * FROM USER_DETAILS WHERE USERNAME = $1 AND PASSWORD = $2', [username, password]);
      let query=await client.query('SELECT * FROM VEHICLE_DETAILS ORDER BY ID', []);
    
      return query.rows; 
    }catch(err){
    console.log(err);
    }
      };
