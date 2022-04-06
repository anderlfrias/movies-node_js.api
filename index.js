const express = require("express");
const app = express();
const port = 8800;
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

main().catch((err) => console.log(err));

async function main() {
    await mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));
}

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
