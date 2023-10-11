console.log("Linked right")


let myLibrary = [];
const existingTitles = new Set(); 


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}

function addBookToLibrary(book) {
    myLibrary.push(book);
 
};





function pushBookToPage() {
    for (book of myLibrary) {
              /* Create the div */
             
        
        let newDiv = document.createElement('div');
        let newDivButtons = document.createElement('div');
        newDiv.classList.add("newBook");
        newDivButtons.classList.add("newBookButtons")

        //Create the p Elements from the books in the mylibrary array

        const titleText = document.createElement('p');
        titleText.classList.add('titleText');
        titleText.textContent = book.title;

        const authorText = document.createElement('p');
        authorText.textContent = book.author;

        const pagesText = document.createElement('p');
        pagesText.textContent = book.pages

        //Create Read Button

        const readButton = document.createElement('button');
        book.read == true 
        ? (
            readButton.classList.add('finishedButton'),
            readButton.textContent = "Read"
        )
         : (
            readButton.classList.add('finishedButton'),
            readButton.classList.add('notRead'),
            readButton.textContent = "Not read"
            );

            readButton.addEventListener('click', () => {
                if (readButton.classList.contains('notRead')) {
                    // If it has "notRead" class, change to "Read"
                    readButton.classList.remove('notRead');
                    readButton.textContent = 'Read';
                } else {
                    // If it doesn't have "notRead" class, change to "Not Read"
                    readButton.classList.add('notRead');
                    readButton.textContent = 'Not Read';
                }
            });
        
        // Create Remove Button

        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.classList.add('removeButton')
        removeButton.addEventListener('click', (e) => {
            title = e.target.parentNode.parentNode.firstChild.innerHTML
            removeBook(title);
            newDiv.remove();
        })

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
   if (myLibrary.some(book => book.title === title)) {
        return;
} else {
    console.log("Title is not in myLibrary");

   newBook = new Book(title,author,pages,read);
   addBookToLibrary(newBook);
   clearBooks();
   pushBookToPage();
}
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



function removeBook(title) {
    console.log(title)
    myLibrary = myLibrary.filter(book => book.title !== title);
    
    
    
    
  }


  function clearBooks() {
    
    const main = document.querySelector('.main-grid');
    while (main.firstChild) {
       
      main.removeChild(main.firstChild);
    }
   
  }