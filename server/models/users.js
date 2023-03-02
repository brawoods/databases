var db = require('../db');

module.exports = {
  getAll: function () {},
  create: function (username, callback) {
    // check if username in table already
    // let qGet = `SELECT UserName FROM users WHERE UserName=${username}`;
    let qGet = 'SELECT UserName FROM users';

    db.connection.query(qGet, (err, results) => {
      if (err) {
        console.log(`Error: ${err}`);
        callback(err);
      } else {
        //post
        if (results.length === 0) {
          console.log(`results should be empty: ${results}`);
          console.log(`Posting user: ${username}`);

          let qPost = `INSERT INTO users(UserName) VALUES('${username}')`;
          db.connection.query(qPost, (postErr, postResults)=> {
            if (postErr) {
              console.log(`Error posting: ${postErr}`);
              callback(postErr);
            } else {
              console.log('Success posting');
              callback(null, true);
            }
          });
        } else {
          // there is already username in database
          console.log(`results: ${results}`);
          console.log(`Username: ${username} already in database`);
          callback(null, false);
        }
      }
    });

  }
};
