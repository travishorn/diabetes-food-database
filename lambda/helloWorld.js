exports.handler = (event, context, callback) => {
  callback(null, {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
    },
    body: JSON.stringify({ message: "Hello, World!" }),
  });
};
