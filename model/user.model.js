const getAllUser = () => {
  console.log("Fetching Data from Database... Done");
  let userData = [
    {
      name: "Nixon",
      designation: "Developer",
    },
    {
      name: "Jobs",
      designation: "Manager",
    },
  ];
  return userData;
};

module.exports = {
  getAllUser: getAllUser,
};
