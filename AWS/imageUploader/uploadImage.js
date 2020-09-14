const aws = require("aws-sdk");
const uuid = require("uuid/v4");
const Jimp = require("jimp");
const S3 = new aws.S3();
const width = 200;
const height = 300;
const imageType = "image/png";
const bucket = process.env.Bucket;
const axios = require("axios");
("use strict");

module.exports.handler = async (event, context, callback) => {
  const { body } = event;
  let requestBody = JSON.parse(body);
  let photoURL = requestBody.photoURL;
  let objectId = uuid();
  let objectKey = `resize-${width}x${height}-${objectId}.png`;

  fetchImage(photoURL)
    .then((image) => image.resize(width, height).getBufferAsync(imageType))
    .then((resizedBuffer) => uploadToS3(resizedBuffer, objectKey))
    .then(function (response) {
      console.log(`Image ${objectKey} was uploaed and resized`);
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(response),
      });
    })
    .catch((error) => console.log(error));
};

const uploadToS3 = (data, key) => {
  return S3.putObject({
    Bucket: bucket,
    key: key,
    Body: data,
    ContentType: imageType,
  }).promise();
};

const fetchImage = (url) => {
  return Jimp.read(url);
};
