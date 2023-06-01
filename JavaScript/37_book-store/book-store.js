//

// This is only a SKELETON file for the 'BookStore' exercise. It's been provided as a

// convenience to get you started writing code faster.

//

const CART_VALUES = [
  0, // no books
  800, // one book
  800 * 2 * 0.95, // two of the same book
  800 * 3 * 0.9, // three of the same book
  800 * 4 * 0.8, // 4 of the same book
  800 * 5 * 0.75, // 5 of the same book
];

const getDistinctBooks = (books) => {
  const retVal = Array.from(new Set(books));
  return retVal;
};

export const cost = (books) => {
  let distinctCount = getDistinctBooks(books).length;
  let bookCount = books.length;
  let initialTotal = 0;

  if (distinctCount === bookCount) {
    return CART_VALUES[bookCount];
  }

  if (distinctCount === 1) {
    return CART_VALUES[1] * bookCount;
  }

  if (distinctCount === 5) {
    if (bookCount % 4 === 0 && bookCount % 3 !== 0) {
      distinctCount = 4;
    }
  }

  initialTotal += CART_VALUES[distinctCount];

  bookCount -= distinctCount;

  while (bookCount > 0) {
    if (bookCount % 4 == 0) {
      
      distinctCount = 4;

      distinctCount = distinctCount > bookCount ? 2 : distinctCount;
    }

    else if (distinctCount > bookCount) {

      distinctCount = bookCount;
    }

    initialTotal += CART_VALUES[distinctCount];

    bookCount -= distinctCount;
  }

  return initialTotal;
};
