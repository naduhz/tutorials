const newBookButton = document.querySelector("#newBook");
const modal = document.querySelector("#modal");
const modalCloseButton = document.querySelector("#modalCloseButton");
const newBookForm = document.querySelector("#newBookForm");
const booksContainer = document.querySelector("#booksContainer");

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

function addBookToLibrary(book) {
  myLibrary.push(book);
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

  const button = document.createElement("button");
  const newBookElement = button;

  newBookElement.className = "book";
  newBookElement.innerText = newBook.title;

  booksContainer.insertBefore(newBookElement, booksContainer.firstChild);

  closeModal();
  newBookForm.reset();
}
