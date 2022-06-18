let libraryArray = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read);
    libraryArray.push(newBook);
    
}

addBookToLibrary("Bob", "Bob", 20, true);
addBookToLibrary("Adam", "Adam", 21, false);
addBookToLibrary("Basdasd", "Basdasd", 224, true);
addBookToLibrary("CUO", "asds", 21, true);
addBookToLibrary("Bob", "Bob", 20, true);




function displayBooks() {
    let cards = document.querySelectorAll(".card");
    cards.forEach(card => {card.remove()});

    libraryArray.forEach((element) => {
        let books = document.querySelector(".books");
        let card = document.createElement('div');
        card.classList.add('card');
        
        
        let title = document.createElement('p');
        title.textContent = (`Title: ${element.title}`);
        let author = document.createElement('p');
        author.textContent = (`Author: ${element.author}`);
        let pages = document.createElement('p');
        pages.textContent = (`Pages: ${element.pages}`);
        let read = document.createElement('p');
        read.textContent = (`Read: ${element.read}`);
        let deleteBut = document.createElement('button');
        deleteBut.classList.add('delete-button');
        deleteBut.textContent = ("Delete");
        deleteBut.dataset.id = libraryArray.indexOf(element);
        
        
        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(read);
        card.appendChild(deleteBut);
        books.appendChild(card);
    });

    let but = document.querySelectorAll(".card button");
    but.forEach((but) => {
        but.addEventListener('click', (deleteBut) => {
            let index = (deleteBut.target.getAttribute('data-id'));
            libraryArray.splice(index,1);
            displayBooks();
        });
    })

    
}


function submitBook() {
    const bookTitle1 = document.getElementById('bookTitle').value;
    const author1 = document.getElementById('author').value;
    const pages1 = document.getElementById('pages').value;
    const read1 = document.getElementById('read').value;
    addBookToLibrary(bookTitle1,author1,pages1,read1);
    displayBooks();
}


displayBooks();

