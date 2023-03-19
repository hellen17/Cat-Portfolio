// const express = require('express');
// const app = express();
// const cors = require('cors');
// const vetData = require('../data/vetData');

// app.use(cors());

// app.get('/', (req, res) => {
//     res.json(vetData);
//     }
// );

// app.listen(5000, () => {
//     console.log('Example app listening on port 5000!');
//     }
// );

// module.exports = app

exports.handler = async function (event, context) {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Hello World" }),
    };
  };