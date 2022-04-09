const getTotalBooksCount = (books) => {
  return books.length;
}

const getTotalAccountsCount = (accounts) => {
  return accounts.length;
}

const getBooksBorrowedCount = (books) => {
  let totalBooksBorrowed = books.filter(
    (book) =>
     book.borrows.filter((record) => record.returned === false).length > 0     
   );
    return totalBooksBorrowed.length;
}

const getMostCommonGenres = (books) => {
  let map = {};
  books.forEach((item) => {
    let genres = item.genre;
   if (map[genres]) {
    map[genres]++;
   } else {
    map[genres] = 1;
   }
  });
  return Object.entries(map)
   .map(([name, count]) => {
    return {
     name,
     count
    };
   })
   .sort((a, b) => b.count - a.count)
   .slice(0,5)
}

const getMostPopularBooks = (books) => {
  return books
  .map((book) => {
   return { name: book.title, count: book.borrows.length };
  })
  .sort((a, b) => (a.count < b.count ? 1 : -1))
  .slice(0, 5);
}

const getMostPopularAuthors = (books, authors) => {
  let result = [];
  authors.forEach((author) => {
    let name = author.name;
   let popularAuthor = {
    name: `${name.first} ${name.last}`,
    count: 0
   };
   books.forEach((book) => {
    if (book.authorId === author.id) {
     popularAuthor.count += book.borrows.length;
    }
   });
   result.push(popularAuthor);
  });
  return result.sort((a, b) => b.count - a.count).slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
