document.addEventListener('DOMContentLoaded', function() {
    // Assuming you have a list of books
    const books = [
        { title: 'Book 1', author: 'Author 1', image: 'book1.jpg' },
        { title: 'Book 2', author: 'Author 2', image: 'book2.jpg' },
        // Add more books as needed
    ];

    const bookList = document.getElementById('book-list');

    books.forEach(book => {
        const bookElement = document.createElement('div');
        bookElement.classList.add('book');
        bookElement.innerHTML = `
            <img src="${book.image}" alt="${book.title}">
            <h2>${book.title}</h2>
            <p>By ${book.author}</p>
        `;
        bookList.appendChild(bookElement);
    });
});

