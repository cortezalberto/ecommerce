'use strict';

const {  Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {

    static associate(models) {
      /*    hasMany     */
      this.hasMany(models.Image);

      /*    belongsTo     */
      this.belongsTo(models.Brand);
      this.belongsTo(models.Category);
      this.belongsTo(models.Size);
      this.belongsTo(models.Visibility);
      this.belongsTo(models.Color);
    }
  };
  Product.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.DECIMAL,
    stock: DataTypes.INTEGER,
    stock_min: DataTypes.INTEGER,
    stock_max: DataTypes.INTEGER,
    BrandId: DataTypes.INTEGER,
    CategoryId: DataTypes.INTEGER,
    SizeId: DataTypes.INTEGER,
    VisibilityId: DataTypes.INTEGER,
    ColorId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};