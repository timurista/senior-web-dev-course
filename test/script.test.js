const googleSearch = require('./script');

const dbMock = [
  'dog.com',
  'cheesepuff.com',
  'disney.com',
  'dogpictures.com',
];

// dependency injection, inject DB here by altering googleSearch function

describe('googleSearch', () => {
  it('returns empty array if result is not found', () => {
    expect(googleSearch('hello', dbMock)).toEqual([])
  })
  
  it('returns array of dogs when dog is passed in', () => {
    expect(googleSearch('dog', dbMock)).toEqual([
      'dog.com',
      'dogpictures.com'
    ])
  })
  
  it('work with undefined or null', () => {
    expect(googleSearch(undefined, dbMock)).toEqual([])
    expect(googleSearch(null, dbMock)).toEqual([])
  })
  
  it('does not return more than 3 matches', () => {
    expect(googleSearch('.com', dbMock)).toHaveLength(3)
  })
})
