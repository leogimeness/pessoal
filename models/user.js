const user = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      tableName: "user",
      timestamps: false,
    });
  
    return User;
}

module.exports = user;