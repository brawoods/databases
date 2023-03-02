var models = require('../models');

module.exports = {
  get: function (req, res) {},
  post: function (req, res) {
    let userData = req.body; // get json object
    models.users.create(userData.username, (err, createdFlag)=> {
      if (err) {
        res.status(500).send(`Error adding user: ${userData.username}, to database`);
      } else {
        if (createdFlag) {
          res.status(201).send(`Created user: ${userData.username}`);
        } else {
          res.status(200).send(`User ${userData.username} already in database or flag is false`);
        }
      }
    }); // create username
  }
};
