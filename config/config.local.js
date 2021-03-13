const {localDBKey} = require('../key');

exports.sequelize = {
  dialect: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  database: 'attendance',
  user: 'root',
  password: localDBKey,
  define: {
    timestamps: true,
    underscored: false,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
  },
  query: {
    nest: true,
  },
}
