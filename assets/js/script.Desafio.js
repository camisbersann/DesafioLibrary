class Book{
    constructor(title, autor, pages){
        this.title = title;
        this.autor = autor;
        this.pages = pages;
    }
}

class User{
    constructor(name, age){
        this.name  = name;
        this.age = age;
        this.booksBorrowed = [];
    }

    getBookBorrewed(books){
        this.booksBorrowed.push(books);
    }
}

class Library{
    constructor(){
        this.books = [];
        this.users = [];
    }

    addBook(book){
        this.books.push(book);
    }

    addUser(user){
        this.users.push(user);
    }
}

const book1 = new Book('Harry Potter', 'J.K Rolling', '300');
const book2 = new Book('O Lado Feio do Amor', 'Colleen Hoover', '336');


const user1 = new User('Camila Bersan', '16');
const user2 = new User('Rafael Cumpri', '18');

const library = new Library();

library.addBook(book1);
library.addUser(user1);

user1.getBookBorrewed(book1);

console.log(book1);
console.log(user1);
console.log(library);

