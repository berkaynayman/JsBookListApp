// Book Class: Represents a Book
class Book {
    constructor(title, author, isbn){
        this.title = title
        this.author = author
        this.isbn = isbn
    }
}

// UI Class: Handle UI Tasks
class UI{
    static displayBooks() {
        const StoredBooks = [
            {
                title: 'Book One',
                autor: 'Berkay N.',
                isbn: '6161'
            },
            {
                title: 'Bordo Mavi',
                author: 'Temel Dursun',
                isbn: '1234'
            }
        ]
        
        const books = StoredBooks

        books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book) {
        const list = document.getElementById('book-list')

        const row = document.createElement('tr')

        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="btn btn-danger delete">X</a></td>
        `

        list.appendChild(row)
    }

    static clearFields() {
        document.getElementById('title').value = ''
        document.getElementById('author').value = ''
        document.getElementById('isbn').value = ''
    }
}

// Store Class: Handles Storage

// Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks)


// Event: Add a Book
document.getElementById('book-form')
.addEventListener('submit', (e) => {
    // Prevent actual submit
    e.preventDefault()

    // Get form values
    const title  = document.getElementById('title').value
    const author = document.getElementById('author').value
    const isbn   = document.getElementById('isbn').value

    // Instatiate Book
    const book = new Book(title, author, isbn)

    // Add Book to UI
    UI.addBookToList(book)

    // Clear fields
    UI.clearFields()
})