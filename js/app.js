const spiritualBooksContainer = document.querySelector(
  ".new__released .spiritual__books"
);
const programmingBooksContainer = document.querySelector(
  ".new__released .programming__books"
);
const closeBtn = document.querySelector(".close");
const sidebar = document.querySelector(".glass");
const menuBtn = document.querySelector(".ham-menu");

const fetchBooks = () => {
  fetch("./books.json")
    .then((res) => res.json())
    .then((res) => {
      let spiritualHTMLOutput = "";
      let codingHTMLOutput = "";

      res.forEach((book) => {
        if (book.category == "spirituality") {
          spiritualHTMLOutput += `
            <div class="book wow fadeInUp" data-wow-duration="2s">
              <img src="${book.url}" alt="${book.book_name}" />
              <div class="book__description">
                <h4>${book.book_name}</h4>
                <a href="">
                <i class="fa fa-shopping-cart" aria-hidden="true"></i>  Buy
                </a>
              </div>
            </div>
          `;
        } else if (book.category == "Programming") {
          codingHTMLOutput += `
            <div class="book wow fadeInUp" data-wow-duration="2s">
              <img src="${book.url}" alt="${book.book_name}" />
              <div class="book__description">
                <h4>${book.book_name}</h4>
                <a href="">
                <i class="fa fa-shopping-cart" aria-hidden="true"></i>  Buy
                </a>
              </div>
            </div>
          `;
        }
      });

      spiritualBooksContainer.innerHTML += spiritualHTMLOutput;
      programmingBooksContainer.innerHTML += codingHTMLOutput;

    });
};

const hideSidebar = () => {
  if (sidebar.classList.contains("visible")) {
    sidebar.classList.remove("visible");
  }
};

const showSidebar = () => sidebar.classList.add("visible");

menuBtn.addEventListener("click", showSidebar);
closeBtn.addEventListener("click", hideSidebar);

window.addEventListener("DOMContentLoaded", fetchBooks);
