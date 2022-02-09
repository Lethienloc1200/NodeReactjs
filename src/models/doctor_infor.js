"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class DoctorInfor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // DoctorInfor.belongsTo(models.User, { foreignkey: "doctorId" });
      // DoctorInfor.belongsTo(models.Allcode, { foreignkey: "priceId", targetkey: "keyMap", as: "priceTypeData" });
      // DoctorInfor.belongsTo(models.Allcode, { foreignKey: "provinceId", targetkey: "keyMap", as: "provinceTypeData" });
      // DoctorInfor.belongsTo(models.Allcode, { foreignKey: "paymentId", targetkey: "keyMap", as: "paymentTypeData" });
    }
  }
  DoctorInfor.init(
    {
      doctorId: DataTypes.INTEGER,
      priceId: DataTypes.STRING,
      provinceId: DataTypes.STRING,
      paymentId: DataTypes.STRING,
      addressClinic: DataTypes.STRING,
      nameClinic: DataTypes.STRING,
      note: DataTypes.STRING,
      count: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "DoctorInfor",
    }
  );
  return DoctorInfor;
};
