var db = require('../db');

module.exports = {
  getAll: function (callback) {
    // get all users
    db.messagesDB.findAll({
      include: db.usersDB,
      attributes: ['Messages.ID', 'UserName', 'TextMessage', 'Room']
    })
      .then((results)=> {
        console.log(`Success getting messages: ${results}`);
        callback(null, results);
      })
      .catch((err)=> {
        console.log(`Error getting messages: ${err}`);
        callback(err);
      });
  },
  create: function (message, callback) {
    // check if username in table already
    // let qGet = `SELECT UserName FROM users WHERE UserName=${username}`;
    db.messagesDB.findOrCreate({
      include: db.usersDB,
      where: {
        //TODO fix this get userID from username in other table Users
        UserID: '',
        TextMessage: message.message,
        Room: message.roomname
      }
    })
      .then((results) => {
        console.log('Success posting messages');
        callback(null, 'Success Posting Messages here');
      })
      .catch((err)=> {
        console.log(`Error in posting Messages: ${err}`);
        callback(err, 'Error Posting Messages here');
      });
  }
};

// module.exports = {
//   getAll: function (responseCallback) {
//     let getQuery = 'SELECT * FROM messages';
//     db.connection.query(getQuery, (getErr, getResults) => {
//       if (getErr) {
//         console.log(`Error getting messages: ${getErr}`);
//         responseCallback(getErr, []);
//       } else {
//         console.log(`Success getting messages: ${JSON.stringify(getResults)}`);
//         responseCallback(null, getResults);
//       }
//     });
//   }, // a function which produces all the messages

//   create: function (message, callback) {
//     let qPost = `INSERT INTO messages(TextMessage, User, Room)
//       VALUES(${JSON.stringify(message.message)},
//       (SELECT UserID FROM users WHERE UserName=${JSON.stringify(message.username)}),
//       ${JSON.stringify(message.roomname)})`;
//     db.connection.query(qPost, (postErr, postResults)=> {
//       if (postErr) {
//         console.log(`Error posting: ${postErr}`);
//         callback(postErr);
//       } else {
//         console.log('Success posting');
//         callback(null, true);
//       }
//     });

//   } // a function which can be used to insert a message into the database
// };
