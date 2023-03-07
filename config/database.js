const mongoose = require('mongoose');

const getDatabaseConnection = async () => {
    return mongoose.connect(process.env.URL, {
        useNewUrlParser : true,
        useUnifiedTopology : true,
    })
}

module.exports = getDatabaseConnection;