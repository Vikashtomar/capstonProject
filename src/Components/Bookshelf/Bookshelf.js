import React from 'react';
import './Bookshelf.css';

const Bookshelf = ({ books }) => {
  return (
    <div className="bookshelf">
      {books.map((book, index) => (
        <div className="book" key={index}>
          <img src={book.coverImage} alt={book.title} />
          <div className="book-title">{book.title}</div>
          <div className="book-author">{book.author}</div>
        </div>
      ))}
    </div>
  );
};

export default Bookshelf;
