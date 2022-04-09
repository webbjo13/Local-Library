const findAccountById = (accounts, id) => {
  return accId = accounts.find((account) => account.id === id);
}

const sortAccountsByLastName = (accounts) => {
  return accs = accounts.sort((AccountA, AccountB) =>
  AccountA.name.last.toLowerCase() > AccountB.name.last.toLowerCase() ? 1 : -1);
}

const getTotalNumberOfBorrows = (account, books) => {
  let totalBorrows = 0;
  for (let i = 0; i < books.length; i++) {
   for (let j = 0; j < books[i].borrows.length; j++) {
    if (account.id === books[i].borrows[j].id) {
     totalBorrows += 1;
    }
   }
  }
  return totalBorrows;
}

const getBooksPossessedByAccount = (account, books, authors) => {
  let results = [];
  let borrowBook = [];
  books.forEach((item) => {
   const borrowed = item.borrows;
   const book = {
    id: item.id,
    title: item.title,
    genre: item.genre,
    authorId: item.authorId,
    author: {},
    borrows: {}
   };
   const { id, title, genre, authorId, author, borrows } = book;
 
   borrowed.forEach((borrow) => {
    if (borrow.id === account.id && borrow.returned === false) {
     results.push(book);
     borrowBook.push(borrow);
     book.borrows = borrowBook;
     book.author = authors.filter((auth) => auth.id === book.authorId)[0];
    }
   });
  });
  return results;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
