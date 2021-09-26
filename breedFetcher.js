const request = require('request');

const fetchBreedDescription = function(catBreed, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${catBreed}`, (error, response, body) => {
    const data = JSON.parse(body);

    if (error) {
      callback(error, null);
    } else if (!data[0]) {
      callback("No cat breed of that name found", null);
    } else {
      callback(null, data[0].description);
      //console.log(typeof data);
    }
  });
};

module.exports = { fetchBreedDescription };