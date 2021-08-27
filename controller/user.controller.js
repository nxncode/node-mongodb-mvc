const userModel = require("../model/user.model");
const dataModel = require("../model/data.model");

const getAllUser = async (req, res) => {
  
  let dataFromModel = await dataModel.getAllData();
  res.send(dataFromModel);
};

module.exports = {
  getAllUser: getAllUser,
};
