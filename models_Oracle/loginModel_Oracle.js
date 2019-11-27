'use strict';
const oracledb = require('oracledb');
const dbConfig = require('./dbconfig.js');

//var oracledb = require('connection');

exports.selectusers =async function (username,password) {
    let connection;
    let row;

  try {

    connection = await oracledb.getConnection(dbConfig);

    var result = await connection.execute(`SELECT *
       FROM USER_DETAILS WHERE USERNAME = :1 AND PASSWORD = :2`, [username, password] ,// no bind variables
       { outFormat: oracledb.OUT_FORMAT_OBJECT },
        );

      row=result.rows[0];
    
  } catch (err) {
    console.error(err);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }

  return row;

  };


  exports.listVehicles =async function () {
    let connection;
    let rows;

  try {
    //oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

    connection = await oracledb.getConnection(dbConfig);

    var result = await connection.execute(`SELECT * FROM VEHICLE_DETAILS ORDER BY ID`, [] ,// no bind variables
    { outFormat: oracledb.OUT_FORMAT_OBJECT },
    );
        
    rows=result.rows;
    
    
  } catch (err) {
    console.error(err);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }

  return rows;

  };
