// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2

const vetData = require('../../data/vetData');

//allow cross origin requests
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
};

const handler = async (event) => {
  try {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(vetData),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
