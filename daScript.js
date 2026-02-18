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

const cardContainer = document.querySelector(".card-container")

cardContainer.style.backgroundColor = "beige";

myLibrary.forEach(book => {
    let tempDiv = document.createElement("div");
    tempDiv.style.backgroundColor = "honeydew";

    let titleDiv = document.createElement("div");
    let authorDiv = document.createElement("div");
    let pagesDiv = document.createElement("div");
    let yearDiv = document.createElement("div");
    let isReadDiv = document.createElement("div");

    titleDiv.setAttribute("class", "book-title");
    authorDiv.setAttribute("class", "book-author");
    pagesDiv.setAttribute("class", "book-pages");
    yearDiv.setAttribute("class", "book-year");
    isReadDiv.setAttribute("class", "book-read");

    authorDiv.innerText = book.author;
    titleDiv.innerText = book.title;
    pagesDiv.innerText = book.pages;
    yearDiv.innerText = book.year;
    isReadDiv.innerText = book.isRead ? "Read" : "Not Read";

    tempDiv.appendChild(titleDiv);
    tempDiv.appendChild(authorDiv);
    tempDiv.appendChild(pagesDiv);
    tempDiv.appendChild(yearDiv);
    tempDiv.appendChild(isReadDiv);

    cardContainer.appendChild(tempDiv);
});


console.log(myLibrary);