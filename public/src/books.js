const findAuthorById = (authors, id) => {
  return authors.find((author) => author.id === id);
}

const findBookById = (books, id) => {
  return bookId = books.find((book) => book.id === id);
}

const partitionBooksByBorrowedStatus = (books) => {
  let returnedBooks = books.filter((book) =>
  book.borrows.every((borrow) => borrow.returned === true)
 );
  let borrowedBooks = books.filter((book) =>
  book.borrows.some((borrow) => borrow.returned === false)
 );
  let totalBooks = [[...borrowedBooks], [...returnedBooks]];
 return totalBooks;
}

const getBorrowersForBook = (book, accounts) => {
  const accountsById = accounts.reduce((acc, account) => {
    acc[account.id] = account;
    return acc;
    }, {});
    return book.borrows.map(({ id, returned}) => ({
    ...accountsById[id],
    returned, 
  }))
  .slice(0,10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
