var db = require('../db');

module.exports = {
  getAll: function (responseCallback) {
    let getQuery = 'SELECT * FROM messages';
    db.connection.query(getQuery, (getErr, getResults) => {
      if (getErr) {
        console.log(`Error getting messages: ${getErr}`);
        responseCallback(getErr, []);
      } else {
        console.log(`Success getting messages: ${JSON.stringify(getResults)}`);
        responseCallback(null, getResults);
      }
    });
  }, // a function which produces all the messages

  create: function (message, callback) {
    let qPost = `INSERT INTO messages(TextMessage, User, Room)
      VALUES(${JSON.stringify(message.message)},
      (SELECT UserID FROM users WHERE UserName=${JSON.stringify(message.username)}),
      ${JSON.stringify(message.roomname)})`;
    db.connection.query(qPost, (postErr, postResults)=> {
      if (postErr) {
        console.log(`Error posting: ${postErr}`);
        callback(postErr);
      } else {
        console.log('Success posting');
        callback(null, true);
      }
    });

  } // a function which can be used to insert a message into the database
};
