const myLibrary = [];

function Book(title, author, published, pages, readstatus) {
    this.title = title,
    this.author = author,
    this.published = published,
    this.pages = pages,
    this.readstatus = readstatus
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayBook() {
    myLibrary.forEach(book => createCard(book));
}

const container = document.querySelector(".container");

function createCard(obj) {
    let cardDiv = newDiv();
    cardDiv.classList.add("card");
    let titleDiv = newDiv();
    titleDiv.classList.add("title");
    titleDiv.textContent = obj.title;
    cardDiv.appendChild(titleDiv);
    let authorDiv = newDiv();
    authorDiv.textContent = `Author: ${obj.author}`;
    cardDiv.appendChild(authorDiv);
    let publishedDiv = newDiv();
    publishedDiv.textContent = `Published in: ${obj.published}`;
    cardDiv.appendChild(publishedDiv);
    let pagesDiv = newDiv();
    pagesDiv.textContent = `Pages: ${obj.pages}`;
    cardDiv.appendChild(pagesDiv);
    let newBtn = document.createElement("button")
    newBtn.addEventListener("click", () => {if (newBtn.textContent === "Read") newBtn.textContent = "Unread"
                                            else if (newBtn.textContent === "Unread") newBtn.textContent = "Read"});
    newBtn.textContent = obj.readstatus;
    cardDiv.appendChild(newBtn);
    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete");
    deleteBtn.textContent = "Remove";
    deleteBtn.addEventListener("click", () => container.removeChild(cardDiv));
    cardDiv.appendChild(deleteBtn);
    container.appendChild(cardDiv);
}

//create div
function newDiv() {
    return document.createElement("div");
}

//add 2 default books
let thewillows = new Book("The Willows", "Algernon Blackwood", 1907, 200, "Read");
addBookToLibrary(thewillows);
let theshadowoverinnsmouth = new Book("The Shadow over Innsmouth", "H. P. Lovecraft", 1936, 250, "Read");
addBookToLibrary(theshadowoverinnsmouth);
displayBook();

document.querySelector("#open-form").addEventListener("click", () => document.querySelector("dialog").showModal());
document.querySelector("#close-form").addEventListener("click", () => document.querySelector("dialog").close());

document.querySelector("#add-book").addEventListener("click", () => {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let published = document.querySelector("#published").value;
    let pages = document.querySelector("#pages").value;
    let readstatus = document.querySelector("#toggle").textContent;
    addBookToLibrary(new Book(title, author, published, pages, readstatus));
    createCard(myLibrary[myLibrary.length - 1]);
});

//Form read/unread toggle button
document.querySelector("#toggle").addEventListener("click", (e) => {
    if (e.target.textContent === "Read") e.target.textContent = "Unread"
    else if (e.target.textContent === "Unread") e.target.textContent = "Read"
});
