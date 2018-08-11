const googleSearch = require('./script');

const dbMock = [
  'dog.com',
  'cheesepuff.com',
  'disney.com',
  'dogpictures.com',
];

// dependency injection, inject DB here by altering googleSearch function

it('returns empty array if result is not found', () => {
  expect(googleSearch('hello', dbMock)).toEqual([])
})

it('returns array of dogs when dog is passed in', () => {
  console.log(googleSearch('dog', dbMock));
  expect(googleSearch('dog', dbMock)).toEqual([
    'dog.com',
    'dogpictures.com'
  ])
})