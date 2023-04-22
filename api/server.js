// packages
let express = require("express");
let cors = require('cors');
let bodyParser = require('body-parser');
let morgan = require('morgan');
const test = require('./cohere_test');

// setup
let router = express.Router();
let app = express();

// production check
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

// cors and testing
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

// port setup
let port = process.env.PORT || 5000;
test();

// app deployment
app.listen(port, function () {
    console.log("Server started on port " + port + " :)");
});

// export application.
module.exports = app;