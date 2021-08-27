const dataSchema = require("./Data");

const getAllData = async () => {
  const result = await dataSchema.Data.find();
  console.log(result);
  return result;
};

const addData = async (details) => {
  console.log("Details in Model - ", details);
  let objectToBeAdded = new dataSchema.Data({
    item: details.item,
    qty: details.qty,
    size: {
      h: details.size.h,
      w: details.size.w,
      uom: details.size.uom,
    },
    status: details.status,
  });

  const result = await objectToBeAdded.save();
  return result;
};

module.exports = {
  getAllData: getAllData,
  addData: addData,
};
