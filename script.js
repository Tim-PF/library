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
let theHobbit2 = new Book('GOT', 'J.R.R tolkien', '295', true)
let gulliverstravels2 = new Book ('Gulliverddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd', 'Mark Twain' ,'300', false)
addBookToLibrary(theHobbit)
addBookToLibrary(gulliverstravels2)
addBookToLibrary(gulliverstravels)
addBookToLibrary(theHobbit2)



function pushBookToPage() {
    for (book in myLibrary) {
              /* Create the div */
              let bookAlreadyAdded = false;

              // Check if the book is already on the page
              const titleTexts = document.querySelectorAll('.titleText');
              titleTexts.forEach(element => {
                if (element.textContent === myLibrary[book].title) {
                  bookAlreadyAdded = true;
                }
              });
          
              if (bookAlreadyAdded) {
                
                continue; // Skip this iteration if the book is already on the page
              }
        let newDiv = document.createElement('div');
        let newDivButtons = document.createElement('div');
        newDiv.classList.add("newBook");
        newDivButtons.classList.add("newBookButtons")

        //Create the p Elements from the books in the mylibrary array

        const titleText = document.createElement('p');
        titleText.classList.add('titleText');
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
            readButton.classList.add('finishedButton'),
            readButton.classList.add('notRead'),
            readButton.textContent = "Not read"
            );

        // Create Remove Button

        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.classList.add('removeButton')

            //   Add Elements to parent
        const main = document.querySelector('.main-grid');

        newDiv.appendChild(titleText);
        newDiv.appendChild(authorText);
        newDiv.appendChild(pagesText);
        newDivButtons.appendChild(readButton);
        newDivButtons.appendChild(removeButton);
        newDiv.appendChild(newDivButtons);
        main.appendChild(newDiv);
        
    }
}

pushBookToPage()


const formBook = document.getElementById('formBookSubmit');

formBook.addEventListener('submit', function (event) {
    event.preventDefault();
    
    title = document.getElementById('title').value;
    author = document.getElementById('author').value;
   pages = document.getElementById('pages').value;
    readCheckBox = document.getElementById('read');
   read = readCheckBox.checked;
   console.log(read);
   newBook = new Book(title,author,pages,read);
   addBookToLibrary(newBook);
   pushBookToPage();
});


const addBookButton = document.querySelector('.addBook');
addBookButton.onclick = addBookButtonClick;


function addBookButtonClick() {
    const overlay = document.getElementById('overlay')
    overlay.classList.add('active')
    const popUp = document.getElementById('popUp')
    popUp.classList.add('active')
}



const overlay = document.querySelector('.overlay');


  overlay.addEventListener('click', overlayClicked);

function overlayClicked() {
    
    const overlay = document.getElementById('overlay')
    overlay.classList.remove('active')
    const popUp = document.getElementById('popUp')
    popUp.classList.remove('active')
}


const buttons = document.querySelectorAll('.finishedButton');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('notRead')) {
            // If it has "notRead" class, change to "Read"
            button.classList.remove('notRead');
            button.textContent = 'Read';
        } else {
            // If it doesn't have "notRead" class, change to "Not Read"
            button.classList.add('notRead');
            button.textContent = 'Not Read';
        }
    });
});
