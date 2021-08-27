const mongoose = require("mongoose");
const connectionString =
  "mongodb+srv://nixon:ivyzQwZZRpX7ZP98@cluster0.oyy7s.mongodb.net/mdb?retryWrites=true&w=majority";

//async await
// async await => if I use await => then execute the next line of code only after await is completed.
const mongooseConnection = async () => {
  try {
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to Database Successfully.");
  } catch (error) {
    console.log("Error In Connecting to the DB - ", error);
  }
};

module.exports = {
  mongooseConnection: mongooseConnection,
};
