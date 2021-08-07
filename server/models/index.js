const fs = require('fs');
const path = require('path');
const {Sequelize} = require('sequelize');

const config = {

  host: 'localhost',
  dialect: 'postgres',
};

const sequelize = new Sequelize('read', 'mariapallareslara', '', config);

const files = fs.readdirSync(__dirname);
const db = {};

for (const file of files) {
  if (file !== 'index.js') {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    console.log(model.name)
    db[model.name] = model;
  }
}


db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
