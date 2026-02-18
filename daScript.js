const myLibrary = [];

function Book(author, title, pages, year, isRead) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }

    this.author = author;
    this.title = title;
    this.pages = pages;
    this.isRead = isRead;
    this.year = year;
    this.id = crypto.randomUUID()
}

const book = new Book("Plato", "The Republic", 484, 2002, true);
console.log(book);

function addBookToLibrary(author, title, pages, year, isRead) {
    myLibrary.push(new Book(author, title, pages, year, isRead));
}

addBookToLibrary("Ray Bradbury", "Fahrenheit 451", 227, 2008, true);
addBookToLibrary("Ar zinai?", "Bredas Pitas", 228, 2001, false)
console.log(myLibrary);