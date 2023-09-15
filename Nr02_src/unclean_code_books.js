const booksList = [
  { bookId: 1, bookName: "Der alte Mann und das Meer", price: 10.5 },
  { bookId: 2, bookName: "Moby Dick", price: 12.3 },
  { bookId: 3, bookName: "1984", price: 8.5 },
];

function getBook(id) {
  const returnBook = booksList.map(book => {
    if (book.bookId === id) {
      return book;
    }
  
  });
  return returnBook[id-1]
}



function addNewBook(newBookName, newPrice) {
const newBookId = booksList.length + 1;
  
  const newEntry = {bookId: newBookId, bookName: newBookName, price: newPrice};
  newBookList = ({...booksList, newEntry});

  return newBookList
}



function showBooks() {
  const returnShowBooks = booksList.map(book => {
    return (book.bookName + " - " + book.price + "€");
  });
  console.log(returnShowBooks)
  return returnShowBooks
}
showBooks();




secondBook = getBook(2);
console.log(secondBook);
newBookArray = addNewBook("Fahrenheit 451", 9.2);
console.log(newBookArray)
console.log(showBooks());
