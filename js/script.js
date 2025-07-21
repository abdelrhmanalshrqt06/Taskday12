
abdo = 12;
console.log(abdo);
var abdo;

function greetUser(name) {
    console.log("Welcome, " + name.toUpperCase() + "!");
}

var books = [
    {
        title: "The Alchemist",
        author: "Paulo Coelho",
        year: 1988,
        isAvailable: true
    },
    {
        title: "1984",
        author: "George Orwell",
        year: 1949,
        isAvailable: false
    },
    {
        title: "Sapiens",
        author: "Yuval Noah Harari",
        year: 2011,
        isAvailable: true
    }
];

var displayBooks = () => {
    console.log("All Books:");
    for (let i = 0; i < books.length; i++) {
        var book = books[i];
        console.log(
            `"${book.title}" by ${book.author} (${book.year}) - ${book.isAvailable ? "Available" : "Not Available"}`
        );
    }
};

function searchBook(title) {
    var found = false;
    for (let i = 0; i < books.length; i++) {
        if (books[i].title.toLowerCase() === title.toLowerCase()) {
            found = true;
            console.warn("Book found!");
            console.log("Title: " + books[i].title);
            console.log("Author: " + books[i].author);
            console.log("Year: " + books[i].year);
            console.log("Status: " + (books[i].isAvailable ? "Available" : "Not Available"));
            break;
        }
    }
    if (!found) {
        console.error("Book not found!");
    }
}

function createBookFromPrompt() {
    var title = prompt("Enter book title:");
    var author = prompt("Enter book author:");
    var year = prompt("Enter publication year:");

    if (title && author && year) {
        var newBook = {
            title: title,
            author: author,
            year: parseInt(year),
            isAvailable: true
        };
        return newBook;
    } else {
        console.error("Invalid book input.");
        return null;
    }
}

function addBook() {
    var book = createBookFromPrompt();
    if (book !== null) {
        return book;
    } else {
        return null;
    }
}

function bookCountMessage() {
    var count = books.length;
    var msg = count > 5 ? "You have a large library." : "You have a small library.";
    console.log("Total books: " + count + ". " + msg);
}

function getCategory(year) {
    var category;
    switch (true) {
        case (year < 1950):
            category = "Classic";
            break;
        case (year < 2000):
            category = "Modern";
            break;
        default:
            category = "Contemporary";
    }
    console.log("Category:", category);
}

var str = "Book";
var num = 2025;
var bool = true;
var undef;
var empty = null;

console.log(typeof str, typeof num, typeof bool, typeof undef, typeof empty);

var quotations = "hello 'I\ 'm 'book lover' ";
console.log(quotations);
var exampleTitle = "harry potter";
console.log(exampleTitle.toUpperCase());
console.log(exampleTitle.length);
console.log(exampleTitle.indexOf("p"));
for (let i = 0; i < exampleTitle.length; i++){
    console.log(exampleTitle.charCodeAt(i));
}

if (num > 2000 && bool) {
    console.log("This is a recent book.");
} else if (num === 2000 || bool === false) {
    console.log("This might be old or not available.");
} else {
    console.warn("Invalid check.");
}


greetUser("Alice");
displayBooks();
searchBook("sapiens");

var newBook = addBook();
if (newBook) {
    books[books.length] = newBook;
    console.log("Book added:", newBook.title);
}

bookCountMessage();
getCategory(2011);

var x = 12 +  "12";
console.log(x);

var x = "4" + 4 + 4
console.log(x);


var x = 4 + 4 + "4"
console.log(x);

var x = "4" * "4"
console.log(x);
console.log( Number("15") );

var x = "5" * "5";
console.log(x);
var x = "40" / "4";
console.log(x);
var x = "100" % "5";
console.log(x);


var x = Number("4") * Number("4")
console.log(x);


var x = "4" * true
var x = Number("4") * Number(false)
console.log(x);

var varName;
console.log(Number(" "));

var x = "4" * "Ahmed";
var x = Number("4") * "9Ahmed";
console.log(x);

console.log(typeof(NaN));