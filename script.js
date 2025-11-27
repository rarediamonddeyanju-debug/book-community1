fetch('books.json')
.then(res => res.json())
.then(data => {
  const booksContainer = document.getElementById('books-container');
  data.books.forEach(book => {
    const author = data.authors.find(a => a.id === book.author_id);
    const bookCard = document.createElement('div');
    bookCard.className = 'book-card';
    bookCard.innerHTML = `
      <img src="${book.cover_image}" alt="${book.title}">
      <h3>${book.title}</h3>
      <p>${book.summary}</p>
      <p><strong>Genre:</strong> ${book.genre} | <strong>Rating:</strong> ${book.rating}</p>
      <p><strong>Author:</strong> ${author.name}</p>
      <video controls poster="${book.trailer.thumbnail}">
        <source src="${book.trailer.video_url}" type="video/mp4">
      </video>
      <p>Views: ${book.trailer.views} | Comments: ${book.trailer.comments_count}</p>
    `;
    booksContainer.appendChild(bookCard);
  });

  const authorsContainer = document.getElementById('authors-container');
  data.authors.forEach(author => {
    const authorCard = document.createElement('div');
    authorCard.className = 'author-card';
    authorCard.innerHTML = `
      <img src="${author.photo}" alt="${author.name}">
      <h3>${author.name}</h3>
      <p>${author.bio}</p>
      <p>Followers: ${author.follower_count} | Total Trailer Views: ${author.total_trailer_views}</p>
    `;
    authorsContainer.appendChild(authorCard);
  });
});
