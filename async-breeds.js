const fs = require('fs');

const x = function(data) {
  console.log(data);
};

const breedDetailsFromFile = function(breed, callback) {

  console.log('breedDetailsFromFile: Calling readFile...');

  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data,) => {
    callback(data);
    console.log("In readFile's Callback: it has the data.");
    // if (!error) return data;
    if (!error) callback(data);
  });
};



const bombay = breedDetailsFromFile('Bombay', x);
console.log('Return Value: ', bombay);