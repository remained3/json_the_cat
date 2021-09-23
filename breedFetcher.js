const request = require('request');
const catBreed = process.argv[2];


request('https://api.thecatapi.com/v1/breeds/search?q=' + catBreed, function(error, response, body) {
  if (error) {
    return console.error('error:', error);
  }
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  const data = JSON.parse(body);

  if (!data[0]) {
    return console.log("No cat breed of that name found");
  }

  console.log(data[0].description);
  //console.log(typeof data);
});
