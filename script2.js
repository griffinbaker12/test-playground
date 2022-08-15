const fetch = require('node-fetch');

const getPeople = fetch => {
  return fetch('http://swapi.py4e.com/api/people/')
    .then(res => res.json())
    .then(data => {
      return {
        count: data.count,
        results: data.results,
      };
    });
};

module.exports = getPeople;
