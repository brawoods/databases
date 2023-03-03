var mysql = require('mysql2');

const Sequelize = require('sequelize');

const orm = new Sequelize('chat', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

//Initialize the tables
var users = orm.define('Users', {
  ID: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true }, // Sequelize.DataTypes.INTEGER ? maybe
  UserName: {
    type: Sequelize.STRING,
    allowNull: false }
});

var messages = orm.define('Messages', {
  ID: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  TextMessage: {
    type: Sequelize.STRING,
  },
  Room: {
    type: Sequelize.STRING
  }
});

//Create Foreign Key Relationships
users.hasMany(messages);
messages.belongsTo(users);

// creates table if it doesn't exist using sync
messages.sync(); // { alter: true } change the old table fields to match what we need
users.sync(); //{ force: true } to drop old table and make new one

exports.usersDB = users;
exports.messagesDB = messages;
// Create a database connection and export it from this file.
// Confirm that the credentials supplied for the connection are correct.
// On your personal computer supply the correct credentials for your mySQL account -- likely
// user: 'root', password: ''
// OR
// user: 'root', password: 'some_password_you_created_at_install'

// module.exports = {
//   connection: mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     database: 'chat'
//   })
// };


