const url = 'https://anapioficeandfire.com/api/books/';

const app = document.querySelector('#books');

const fetchData = (url) => {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      app.innerHTML = ''; 
      data.forEach(book => {
        const bookElement = document.createElement('div');
        bookElement.classList.add('book', 'text-center', 'my-3');
        bookElement.innerHTML = `
          <h2>${book.name}</h2>
          <p><strong>Author:</strong> ${book.authors.join(', ')}</p>
          <p><strong>Published:</strong> ${new Date(book.released).getFullYear()}</p>
          <p><strong>Pages:</strong> ${book.numberOfPages}</p>
        `;
        app.appendChild(bookElement);
      });
    })
    .catch(error => {
      app.innerHTML = '<p>Error fetching data</p>';
      console.error('Error:', error);
    });
};

fetchData(url);
