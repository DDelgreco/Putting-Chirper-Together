import { connect } from "http2";

const mysql = require("mysql");

let connection = mysql.createConnection({
  host: "localhost",
  database: "Chirpr",
  user: "chirprapp",
  password: "password"
});

connection.connect();

export let getChirps = () => {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT u.name as userName, c.id, c.location, c.text, c._created FROM chirps c JOIN users u on c.userid = u.id ORDER BY c._created DESC",
      (error, results, field) => {
        if (error) {
          connection.end();
          reject(error);
        }
        resolve(results);
        // connection.end();
      }
    );
  });
};
export let getChirp = id => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT u.name as userName, c.id, c.location, c.text, c._created FROM chirps c JOIN users u on c.userid = u.id WHERE c.id=${id}`,
      (err, results, fields) => {
        if (err) {
          reject();
    
          return console.log(err);
        }
        resolve(results[0]);
      }
    );
  });
};
export let getMentions = userId => {
  return new Promise((resolve, reject) => {
    connection.query(
      `CALL spGetMentions(${userId})`,
      (error, results, field) => {
        if (error) {
          
          reject(error);
        }
        resolve(results);
      }
    );
  });
};
export let postChirp = chirp => {
  return new Promise((resolve, reject) => {
    connection.query(
      `INSERT INTO chirps (userid, text, location)
    VALUES ( ${chirp.userid}, '${chirp.text}', '${chirp.location}');`,
      (error, results, field) => {
        if (error) {
       
          reject(error);
        }
        resolve(results);
      }
    );
  });
};
export let updateChirp = (id, chirp) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `UPDATE chirps
    SET text = '${chirp.text}' 
    WHERE id = ${id};`,
      (error, results, field) => {
        if (error) {
        
          reject(error);
        }
        resolve(results);
      }
    );
  });
};
export let deleteChirp = id => {
  return new Promise((resolve, reject) => {
    connection.query(
      `DELETE FROM chirps WHERE id=${id}`,
      (error, results, field) => {
        if (error) {
     
          reject(error);
        }
        resolve(results);
      }
    );
  });
};
