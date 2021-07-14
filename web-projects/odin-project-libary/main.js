const newBookButton = document.querySelector("#newBook");
const formModal = document.querySelector("#formModal");
const bookModal = document.querySelector("#bookModal");
const formModalCloseButton = document.querySelector("#formModalCloseButton");
const bookModalCloseButton = document.querySelector("#bookModalCloseButton");
const newBookForm = document.querySelector("#newBookForm");
const booksContainer = document.querySelector("#booksContainer");
const toggleReadButton = document.querySelector("#toggle-read");

let myLibrary = [];

if (!localStorage.getItem("library")) {
  addToStorage(myLibrary);
} else {
  myLibrary = JSON.parse(localStorage.getItem("library"));
  myLibrary = myLibrary.map(
    (book) => new Book(book.title, book.author, book.pages, book.status)
  );
  refreshDisplay();
}

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

  this.toggle = function () {
    this.status = this.status ? false : true;
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
  const newBookReadStatus = document.getElementById("readStatusYes").checked
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
  addToStorage(myLibrary);
  refreshDisplay();
}

function removeBookFromLibrary(book) {
  const index = myLibrary.indexOf(book);
  myLibrary.splice(index, 1);
  addToStorage(myLibrary);
  refreshDisplay();
}

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

    const processedBook = new Book(
      book.title,
      book.author,
      book.pages,
      book.status
    );

    newBookElement.className = "book-wrapper";
    newBookElement.innerText = processedBook.title;

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
        editDetails(processedBook);
        processedBook.status
          ? (toggleReadButton.checked = true)
          : (toggleReadButton.checked = false);
        openBookModal();
        window.addEventListener("click", windowCloseBookModal);
        bookModalCloseButton.addEventListener("click", closeBookModal);
      }
    });

    newBookRemove.addEventListener("click", (event) => {
      if (event.target === newBookRemove) {
        removeBookFromLibrary(processedBook);
      }
    });
  });

  toggleReadButton.addEventListener("change", (event) => {
    const bookTitle = document.querySelector("#bookTitle").innerText;
    const currentBookObject =
      myLibrary[myLibrary.findIndex((book) => book.title === bookTitle)];

    currentBookObject.toggle();
    editDetails(currentBookObject);
    currentBookObject.status
      ? (toggleReadButton.checked = true)
      : (toggleReadButton.checked = false);

    myLibrary[myLibrary.findIndex((book) => book.title === bookTitle)] =
      currentBookObject;
    addToStorage(myLibrary);
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

function storageAvailable(type) {
  var storage;
  try {
    storage = window[type];
    var x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

function addToStorage(library) {
  if (storageAvailable("localStorage")) {
    localStorage.setItem("library", JSON.stringify(library));
  } else {
    console.log("localStorage not available.");
  }
}

function removeFromStorage() {
  if (storageAvailable("localStorage")) {
    localStorage.removeItem("library");
  } else {
    console.log("localStorage not available.");
  }
}
