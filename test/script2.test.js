const fetch = require('node-fetch');
const swapi = require('./script2');

// expect.assertions

it('calls swapi to get people', () => {
  expect.assertions(1); // makes sure we assert something
  // need to return promise when running async test
  return swapi.getPeople(fetch).then(data => {
    expect(data.count).toEqual(87)
  })
})

it('calls swapi to get people', () => {
  expect.assertions(2); 
  // https://github.com/sapegin/jest-cheat-sheet
  return swapi.getPeopleAsync(fetch).then(data => {
    expect(data.count).toEqual(87)
    expect(data.results.length).toBeGreaterThan(5);
  })
})