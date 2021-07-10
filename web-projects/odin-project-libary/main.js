const newBook = document.querySelector("#newBook");
const modal = document.querySelector("#modal");
const modalCloseButton = document.querySelector("#modalCloseButton");

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

newBook.addEventListener("click", openModal);
modalCloseButton.addEventListener("click", closeModal);

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
