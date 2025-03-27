import { Sequelize } from 'sequelize';

import book from './book.js';
import library from './library.js';
import config from '../config/config.js';

const sequelize = new Sequelize(config.development);

const db = {};

db.sequelize = sequelize;
db.book = book(sequelize);
db.library = library(sequelize);

Object.values(db).forEach((model) => {
  if (model.associate) {
      model.associate(db);
  }
});

export default db;

// 'use strict';

// import fs from 'fs';
// import path from 'path';
// import { Sequelize, DataTypes } from 'sequelize';
// import process from 'process';
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';
// import configData from '../config/config.js';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);
// const basename = path.basename(__filename);
// const env = process.env.NODE_ENV || 'development';
// const config = configData[env];

// const db = {};

// const sequelize = config.use_env_variable
//   ? new Sequelize(process.env[config.use_env_variable], config)
//   : new Sequelize(config.database, config.username, config.password, config);

// fs.readdirSync(__dirname)
//   .filter(file =>
//     file.indexOf('.') !== 0 &&
//     file !== basename &&
//     file.endsWith('.js') &&
//     !file.endsWith('.test.js')
//   )
//   .forEach(file => {
//     import(path.join(__dirname, file)).then(module => {
//       const model = module.default(sequelize, DataTypes);
//       db[model.name] = model;

//       if (model.associate) {
//         model.associate(db);
//       }
//     });
//   });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// export default db;



// // 'use strict';

// // const fs = require('fs');
// // const path = require('path');
// // const Sequelize = require('sequelize');
// // const process = require('process');
// // const basename = path.basename(__filename);
// // const env = process.env.NODE_ENV || 'development';
// // const config = require(__dirname + '/../config/config.json')[env];
// // const db = {};

// // let sequelize;
// // if (config.use_env_variable) {
// //   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// // } else {
// //   sequelize = new Sequelize(config.database, config.username, config.password, config);
// // }

// // fs
// //   .readdirSync(__dirname)
// //   .filter(file => {
// //     return (
// //       file.indexOf('.') !== 0 &&
// //       file !== basename &&
// //       file.slice(-3) === '.js' &&
// //       file.indexOf('.test.js') === -1
// //     );
// //   })
// //   .forEach(file => {
// //     const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
// //     db[model.name] = model;
// //   });

// // Object.keys(db).forEach(modelName => {
// //   if (db[modelName].associate) {
// //     db[modelName].associate(db);
// //   }
// // });

// // db.sequelize = sequelize;
// // db.Sequelize = Sequelize;

// // module.exports = db;
