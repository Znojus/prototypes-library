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

function displayBooks() {
        cardContainer.innerHTML = ""
        myLibrary.forEach(book => {
        let tempDiv = document.createElement("div");

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
        pagesDiv.innerText = `${book.pages} pages`;
        yearDiv.innerText = book.year;
        isReadDiv.innerText = book.isRead ? "Read" : "Not Read";

        tempDiv.appendChild(titleDiv);
        tempDiv.appendChild(authorDiv);
        tempDiv.appendChild(pagesDiv);
        tempDiv.appendChild(yearDiv);
        tempDiv.appendChild(isReadDiv);

        let removeBtn = document.createElement("button");
        removeBtn.setAttribute("class", "remove-button");
        removeBtn.setAttribute("data-id", book.id); //---------------------
        removeBtn.innerText = "Remove book";
        tempDiv.appendChild(removeBtn);

        cardContainer.appendChild(tempDiv);
    });
}

cardContainer.addEventListener("click", (event) => {
    if(event.target.classList.contains("remove-button")) {
        const bookId = event.target.dataset.id;
        const index = myLibrary.findIndex(book => book.id === bookId);
        myLibrary.splice(index, 1);
        displayBooks();
    }
})

displayBooks();

const showBtn = document.getElementById("show-dialog");
const dialog = document.getElementById("dialog");
const submitBtn = document.getElementById("normal-close");
const selected = dialog.querySelector("title");

showBtn.addEventListener("click", () => {
    dialog.showModal();
});

submitBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const form = document.querySelector('form');
    let read_status;
    var ele = document.getElementsByName("read_status");

    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            read_status = ele[i].value;
        } 
    } 

    if (form.reportValidity()) {
        addBookToLibrary(
            document.querySelector("#author").value,
            document.querySelector("#title").value,
            document.querySelector("#pages").value,
            document.querySelector("#year").value,
            read_status === "true"
        )
        dialog.close();
        displayBooks();
    };
})

console.log(myLibrary);