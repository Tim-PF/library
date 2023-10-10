console.log("Linked right")



const myLibrary = [];


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}

function addBookToLibrary(book) {
    myLibrary.push(book);
 
};


let theHobbit = new Book('GOT', 'J.R.R tolkien', '295', true)
let gulliverstravels = new Book ('Gulliver', 'Mark Twain' ,'300', false)
addBookToLibrary(theHobbit)
addBookToLibrary(gulliverstravels)


function pushBookToPage() {
    for (book in myLibrary) {
              /* Create the div */

        let newDiv = document.createElement('div');
        newDiv.classList.add("newBook");

        //Create the p Elements from the books in the mylibrary array

        const titleText = document.createElement('p');
        titleText.textContent = myLibrary[book].title;

        const authorText = document.createElement('p');
        authorText.textContent = myLibrary[book].author;

        const pagesText = document.createElement('p');
        pagesText.textContent = myLibrary[book].pages

        //Create Read Button

        const readButton = document.createElement('button');
        myLibrary[book].read == true 
        ? (
            readButton.classList.add('finishedButton'),
            readButton.textContent = "Read"
        )
         : (
            readButton.classList.add('unfinishedButton'),
            readButton.textContent = "Not read"
            );

        // Create Remove Button

        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";

            //   Add Elements to parent

        newDiv.appendChild(titleText);
        newDiv.appendChild(authorText);
        newDiv.appendChild(pagesText);
        newDiv.appendChild(readButton);
        newDiv.appendChild(removeButton);
        document.body.appendChild(newDiv);
    }
}

pushBookToPage()