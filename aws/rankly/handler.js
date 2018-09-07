'use strict';

module.exports.rank = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Serverless Rankly deployed!',
      input: event,
    }),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
