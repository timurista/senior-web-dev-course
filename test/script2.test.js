const fetch = require('node-fetch');
const swapi = require('./script2');

// expect.assertions

// mock to speed tests


// it('calls swapi to get people', () => {
//   expect.assertions(1); // makes sure we assert something
//   // need to return promise when running async test
//   return swapi.getPeople(fetch).then(data => {
//     expect(data.count).toEqual(87)
//   })
// })

// it('calls swapi to get people', () => {
//   expect.assertions(2); 
//   // https://github.com/sapegin/jest-cheat-sheet
//   return swapi.getPeopleAsync(fetch).then(data => {
//     expect(data.count).toEqual(87)
//     expect(data.results.length).toBeGreaterThan(5);
//   })
// })

it('get people returns count and results', () => {
  const count = 87;
  const results = [0,1,2,3,4,5];
  const mockFetch = jest.fn().mockReturnValue(Promise.resolve({
    json: () => Promise.resolve({ count, results })
  }))

  expect.assertions(4)
  return swapi.getPeople(mockFetch).then(data => {
    expect(mockFetch.mock.calls.length).toBe(1);
    expect(mockFetch).toBeCalledWith('https://swapi.co/api/people')
    expect(data.count).toEqual(count)
    expect(data.results.length).toBeGreaterThan(5);
  })
})