module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const User = app.model.define('users', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    openId: STRING(36),
    name: STRING(30),
    password: STRING(20),
    createdAt: DATE,
    updatedAt: DATE,
  });
  return User;
};
