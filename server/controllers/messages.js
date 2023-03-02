var models = require('../models');

module.exports = {
  get: function (req, res) {

  }, // a function which handles a get request for all messages
  post: function (req, res) {
    let userData = req.body; // get json object
    models.messages.create(userData, (err, createdFlag)=> {
      if (err) {
        res.status(500).send(`Error message: ${userData}, to database`);
      } else {
        if (createdFlag) {
          res.status(201).send(`Created message: ${userData}`);
        } else {
          res.status(200).send(`Message ${userData} already in database or flag is false`);
        }
      }
    }); // create username
  }
}; // a function which handles posting a message to the database


