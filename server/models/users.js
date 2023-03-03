var db = require('../db');

module.exports = {
  getAll: function (callback) {
    // get all users
    db.usersDB.findAll({
      attributes: ['UserName']
    })
      .then((results)=> {
        console.log(`Success getting users: ${results}`);
        callback(null, results);
      })
      .catch((err)=> {
        console.log(`Error getting users: ${err}`);
        callback(err);
      });
  },
  create: function (username, callback) {
    // check if username in table already
    // let qGet = `SELECT UserName FROM users WHERE UserName=${username}`;
    db.usersDB.findOrCreate({
      where: { UserName: username }
    })
      .then((results) => {
        console.log('Success posting');
        callback(null, 'Success Posting');
      })
      .catch((err)=> {
        console.log(`Error in posting: ${err}`);
        callback(err, 'Error Posting here');
      });
  }
};


// module.exports = {
//   getAll: function (callback) {
//     let requestQuery = 'SELECT * FROM users';

//     db.connection.query(requestQuery, (err, results) => {
//       if (err) {
//         console.log(`Error getting users: ${err}`);
//         callback(err);
//       } else {
//         console.log(`Success getting users: ${results}`);
//         callback(null, results);
//       }
//     });
//   },
//   create: function (username, callback) {
//     // check if username in table already
//     // let qGet = `SELECT UserName FROM users WHERE UserName=${username}`;
//     let qGet = `SELECT UserName FROM users WHERE UserName='${username}'`;

//     db.connection.query(qGet, (err, results) => {
//       if (err) {
//         console.log(`Error: ${err}`);
//         callback(err);
//       } else {
//         //post
//         if (results.length === 0) {
//           console.log(`results should be empty: ${results}`);
//           console.log(`Posting user: ${username}`);

//           let qPost = `INSERT INTO users(UserName) VALUES('${username}')`;
//           db.connection.query(qPost, (postErr, postResults)=> {
//             if (postErr) {
//               console.log(`Error posting: ${postErr}`);
//               callback(postErr);
//             } else {
//               console.log('Success posting');
//               callback(null, true);
//             }
//           });
//         } else {
//           // there is already username in database
//           console.log(`results: ${results}`);
//           console.log(`Username: ${username} already in database`);
//           callback(null, false);
//         }
//       }
//     });

//   }
// };
