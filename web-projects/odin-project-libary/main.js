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
        displayDetails(book);
      }
    });

    newBookRemove.addEventListener("click", (event) => {
      if (event.target === newBookRemove) {
        removeBookFromLibrary(book);
      }
    });
  });
}

function displayDetails(book) {
  console.log(book);
}
