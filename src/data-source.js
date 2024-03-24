const mongoose = require('mongoose');

const mongoDBUrl = process.env.MONGO_DB_URL || "mongodb://127.0.0.1/shopping-cart";

class Database{
    static async connect() {
        try {
            await mongoose.connect(mongoDBUrl);
        }
        catch (err) {
            await mongoose.disconnect();
            console.error(err);
        }
    }
}

module.exports = Database;