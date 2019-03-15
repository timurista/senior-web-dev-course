import faker from 'faker';

faker.seed(123);

export default class Faker {
  constructor(delay = 500) {
    this.cursor = null;
    this.delay = delay;
  }

  next(cursor, pageSize = 20) {
    let offset = 0;
    if (!cursor) {
      this.cursor = 20;
    }
    else {
      this.cursor += pageSize;
    }
    let cards = new Array(pageSize).fill({});
    for (let card of cards) {
      card = faker.helpers.createCard()
    }

    return new Promise(resolve => setTimeout(() => {
      resolve(cards);
    }, 500));
  }
}