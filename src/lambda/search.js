const { singular } = require('pluralize');
const Fuse = require('fuse.js');
const { foods } = require('../database.json');

const fuse = new Fuse(foods, {
  keys: ['name'],
});

exports.handler = (event, context, callback) => {
  const q = singular(event.queryStringParameters.q);

  const matches = fuse.search(q);

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
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    },
    body: JSON.stringify(results),
  });
};
