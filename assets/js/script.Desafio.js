class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    // Pegar titulo do livro
    getBookTitle() {
        return this.book
    }
}



class User {
    constructor(name, age) {
        this.name = name
        this.age = age
        this.booksBorrowed = []
    }

    // Alugar um livro
    getBookBorrowed(book) {
        this.booksBorrowed.push(book)
    }

    // Pegar o titulo de todos os livros emprestados
    allMyBooksBorrowed() {
        console.log(`${this.name} alugou os livros :`)
        this.booksBorrowed.forEach(book => {
            if (book.title != undefined) {
                return console.log(book.title)
            }else{
                console.log("Teste");
            }
        });
    }


}



class Library {
    constructor() {
        this.users = []
        this.books = []
    }

    // Adicionar livro
    addBook(book) {
        this.books.push(book);
    }

    // Adicionar usuario
    addUser(user) {
        this.users.push(user);
    }

    // Pegar os livros alugados por pessoa
    getBooksForUser() {
        this.users.forEach(user => {
            if(user.name != undefined) {
                return user.name + user.allMyBooksBorrowed()
                
            }
        });
    }

    // Pegar todos os titulos da biblioteca
    getBooksFromLibrary() {
        this.books.forEach(book => {
            if(book.title != undefined) {
                return console.log(book.title)
            }
        })
    }

}

// Livros que existem
const book1 = new Book('Harry Potter', 'J. K. Rowling', '300')
const book2 = new Book('Harry Potter 2', 'J. K. Rowling', '300')
const book3 = new Book('Harry Potter 3', 'J. K. Rowling', '300')
const book4 = new Book('Harry Potter 4', 'J. K. Rowling', '300')

// Usuarios de existem
const user1 = new User('Rafael Cumpri', '18')
const user2 = new User('Camila Bersan', '16')

// Biblioteca existente 
const library1 = new Library()


// Usuarios na biblioteca
library1.addUser(user1)
library1.addUser(user2)


// Livros na biblioteca
library1.addBook(book1)
library1.addBook(book2)
library1.addBook(book3)
library1.addBook(book4)


// Usuario 1
user1.getBookBorrowed(book1)
user1.getBookBorrowed(book2)


// Usuario 2
user2.getBookBorrowed(book3)
user2.getBookBorrowed(book4)

// pegando de dentro da livraria os usuarios e os livros anexados
console.log(library1.getBooksForUser())