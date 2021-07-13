const newBookButton = document.querySelector("#newBook");
const formModal = document.querySelector("#formModal");
const bookModal = document.querySelector("#bookModal");
const formModalCloseButton = document.querySelector("#formModalCloseButton");
const bookModalCloseButton = document.querySelector("#bookModalCloseButton");
const newBookForm = document.querySelector("#newBookForm");
const booksContainer = document.querySelector("#booksContainer");
const refreshButton = document.querySelector("#refresh");

let myLibrary = [];

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;

  this.info = function () {
    return `${title} by ${author}, ${pages} pages, ${
      status ? "Read" : "Not read yet"
    }`;
  };
}

window.addEventListener("click", windowCloseFormModal);

newBookButton.addEventListener("click", openFormModal);
formModalCloseButton.addEventListener("click", closeFormModal);
newBookForm.addEventListener("submit", updateLibrary);

function openFormModal() {
  formModal.style.display = "block";
}

function closeFormModal() {
  formModal.style.display = "none";
}

function windowCloseFormModal(event) {
  if (event.target == formModal) {
    formModal.style.display = "none";
  }
}

function updateLibrary(event) {
  event.preventDefault();

  const newBookTitle = document.getElementById("title").value;
  const newBookAuthor = document.getElementById("author").value;
  const newBookPages = document.getElementById("pages").value;
  const newBookReadStatus = document.getElementById("readStatusYes").value
    ? true
    : false;

  const newBook = new Book(
    newBookTitle,
    newBookAuthor,
    newBookPages,
    newBookReadStatus
  );

  addBookToLibrary(newBook);

  closeFormModal();
  newBookForm.reset();
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  refreshDisplay();
}

function removeBookFromLibrary(book) {
  const index = myLibrary.indexOf(book);
  myLibrary.splice(index, 1);
  refreshDisplay();
}

refreshButton.addEventListener("click", (event) => {
  refreshDisplay();
});

function refreshDisplay() {
  const allChildElements = Array.from(booksContainer.childNodes);
  for (let i = 0; i < allChildElements.length - 3; i++) {
    booksContainer.removeChild(booksContainer.firstChild);
  }

  myLibrary.forEach((book) => {
    const newBookElement = document.createElement("button");
    const optionsContainer = document.createElement("div");
    const newBookDetails = document.createElement("div");
    const newBookRemove = document.createElement("div");

    newBookElement.className = "book-wrapper";
    newBookElement.innerText = book.title;

    newBookDetails.className = "text-wrapper book-details";
    newBookDetails.innerText = "Details";
    newBookRemove.className = "text-wrapper book-remove";
    newBookRemove.innerText = "Remove";

    optionsContainer.className = "optionsContainer";

    optionsContainer.appendChild(newBookDetails);
    optionsContainer.appendChild(newBookRemove);

    booksContainer.insertBefore(newBookElement, booksContainer.firstChild);
    newBookElement.appendChild(optionsContainer);

    newBookDetails.addEventListener("click", (event) => {
      if (event.target === newBookDetails) {
        editDetails(book);
        openBookModal();
        window.addEventListener("click", windowCloseBookModal);
        bookModalCloseButton.addEventListener("click", closeBookModal);
      }
    });

    newBookRemove.addEventListener("click", (event) => {
      if (event.target === newBookRemove) {
        removeBookFromLibrary(book);
      }
    });
  });
}

function editDetails(book) {
  const bookTitle = document.querySelector("#bookTitle");
  const bookAuthor = document.querySelector("#bookAuthor");
  const bookPages = document.querySelector("#bookPages");
  const bookStatus = document.querySelector("#bookStatus");

  bookTitle.innerText = `${book.title}`;
  bookAuthor.innerText = `${book.author}`;
  bookPages.innerText = `${book.pages}`;
  bookStatus.innerText = `${book.status ? "Read" : "Not read yet"}`;
}

function openBookModal() {
  bookModal.style.display = "block";
}

function closeBookModal() {
  bookModal.style.display = "none";
}

function windowCloseBookModal(event) {
  if (event.target == bookModal) {
    bookModal.style.display = "none";
  }
}
