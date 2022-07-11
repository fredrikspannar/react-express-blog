const mongoose = require("mongoose");

async function dbConnect(dsn:string|false) { 
    await mongoose.connect(dsn, { useNewUrlParser : true });
}

export default dbConnect;