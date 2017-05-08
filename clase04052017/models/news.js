'use strict';
module.exports = function(sequelize, DataTypes) {
    var News = sequelize.define('News', {
        title: DataTypes.STRING,
        body: DataTypes.TEXT
    }, {
        classMethods: {
            associate: function(models) {
                News.belongsTo(models.User, { as: 'author'});
            }
        }
    });
    return News;
};