/*Program: Create a Book class with properties like title, author, and status
(borrowed or available). Create a Library class with methods to add, remove, 
and borrow books.
Task: Implement searching by author or title and allow books to be marked as 
borrowed or available. Include a feature to track overdue books and calculate 
fines for late returns. */
class Book {
    constructor(title, author, status = "available") {
        this.title = title;
        this.author = author;
        this.status = status;
    }
}

class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    borrowBook(title) {
        const book = this.books.find(b => b.title === title && b.status === "available");
        if (book) book.status = "borrowed";
    }
}