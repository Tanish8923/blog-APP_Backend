const mongoose = require("mongoose");

require("dotenv").config();


//  You are using a named export when you write exports.dbConnect = () => { ... }. 
//  This means that the function dbConnect will be exported with the same name, and
//  you need to import it with curly braces {} wherever you're importing it.


exports.dbConnect = () => {

    const DB_URL = process.env.DB_URL;

    mongoose.connect(DB_URL)
    .then(console.log("DB connected successfully"))
    .catch((error) => {

        console.log("DB connection failed")
        console.error(error);
        process.exit(1);

    })
}

// module.exports = dbConnect