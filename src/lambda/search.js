const db = [
  {
    name: 'sugar',
    level: 1,
    type: 'ingredient',
    explanation: 'Sugar is not easily processed by a diabetic person\'s body. Too much sugar can cause high blood sugar (hyperglycemia) which can cause increased thirst, frequent urination, fatigue, nausea and vomiting, shortness of breath, stomach pain, fruity breath odor, a very dry mouth, rapid heartbeat, and diabetic coma.',
    suggestions: 'Sugar is important for bodily function, but sugar intake should be carefully monitored to avoid high blood sugar (hyperglycemia) and low blood sugar (hypoglycemia).',
  },
];

exports.handler = (event, context, callback) => {
  const { q } = event.queryStringParameters;

  const found = db.filter(food => food.name === q);

  const results = {
    resultCount: found.length,
    results: found,
  };

  callback(null, {
    statusCode: 200,
    body: JSON.stringify(results),
  });
};
