// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2

const vetData = require('../../data/vetData');

const handler = async (event) => {
  try {
    return {
      statusCode: 200,
      body: JSON.stringify(vetData),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
