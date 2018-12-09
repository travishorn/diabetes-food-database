const { singular } = require('pluralize');
const { foods } = require('../database.json');

exports.handler = (event, context, callback) => {
  const q = singular(event.queryStringParameters.q.toLowerCase());

  const matches = foods.filter(food => food.name === q);

  const results = {
    query: event.queryStringParameters.q,
    interpretation: q,
    resultCount: matches.length,
    results: matches,
  };

  callback(null, {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(results),
  });
};