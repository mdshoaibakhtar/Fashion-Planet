const mongoose = require("mongoose");
const DB = "mongodb+srv://mdshoaib:786786786@cluster0.fhkt1.mongodb.net/mernstack?retryWrites=true&w=majority";
mongoose.connect(DB).then(() => {
    console.log(`Connection SuccessFully`);
}).catch((err) =>
    console.log(`Connection Error`));