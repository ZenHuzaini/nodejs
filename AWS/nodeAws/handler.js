"use strict";

module.exports.hello = async (event) => {
  if (!event) {
    return { message: "you need to pass the event!" };
  }

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v1.0! Your function executed successfully!",
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports.something = async (something) => {
  return { message: "from something " + something };
};

module.exports.calculation = async (something) => {
  // console.log(something);
  //to get parameter
  const {
    pathParameters: { number1, number2 },
  } = something;
  try {
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: `So, ${number1} + ${number2} = ${
            parseInt(number1) + parseInt(number2)
          }`,
        },
        null,
        2
      ),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(
        {
          message: "something goes worng",
        },
        null,
        2
      ),
    };
  }
};

module.exports.cronMessage = async (event) => {
  try {
    const now = new Date();
    const message = `the time noew is ${now}`;
    console.log(message + " is rnning since it is a cron");
    return { message };
  } catch (error) {
    return { message: "something is error" };
  }
};
