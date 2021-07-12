const newBookButton = document.querySelector("#newBook");
const modal = document.querySelector("#modal");
const modalCloseButton = document.querySelector("#modalCloseButton");
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
      status ? "read" : "not read yet"
    }`;
  };
}

window.addEventListener("click", windowCloseModal);

newBookButton.addEventListener("click", openModal);
modalCloseButton.addEventListener("click", closeModal);
newBookForm.addEventListener("submit", updateLibrary);

function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

function windowCloseModal(event) {
  if (event.target == modal) {
    modal.style.display = "none";
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

  closeModal();
  newBookForm.reset();
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function refreshDisplay() {
  const allChildElements = Array.from(booksContainer.childNodes);
  for (let i = 0; i < allChildElements.length - 3; i++) {
    booksContainer.removeChild(booksContainer.firstChild);
  }

  myLibrary.forEach((book) => {
    const button = document.createElement("button");
    const newBookElement = button;

    newBookElement.className = "book";
    newBookElement.innerText = book.title;

    booksContainer.insertBefore(newBookElement, booksContainer.firstChild);
  });
}

refreshButton.addEventListener("click", (event) => {
  refreshDisplay();
});
