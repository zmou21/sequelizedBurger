module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });

  // Add a belongsTo association to Authors here
  // Example: https://github.com/sequelize/express-example/blob/master/models/task.js
  return Burger;
};
