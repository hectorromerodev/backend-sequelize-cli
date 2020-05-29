'use strict';
module.exports = (sequelize, DataTypes) => {
  const Log = sequelize.define('Log', {
    user_id: DataTypes.INTEGER,
    model_name: DataTypes.STRING,
    action: DataTypes.STRING,
    date: DataTypes.STRING,
    old_data: DataTypes.STRING,
    new_data: DataTypes.STRING
  }, {});
  Log.associate = function(models) {
    // associations can be defined here
  };
  return Log;
};