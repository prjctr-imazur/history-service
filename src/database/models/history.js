const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class History extends Model {
    static associate() {}
  }

  History.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      userId: DataTypes.INTEGER,
      videoId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'History',
      tableName: 'history',
    },
  );
  return History;
};
