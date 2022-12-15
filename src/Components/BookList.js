import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const BookList = (props) => {
  const { books, removeHandler } = props;
  return (
    <ul className="booklist">
      {
          books.map((bookElment) => (
            <Book
              key={bookElment.id}
              bookdata={bookElment}
              removeBookFromList={removeHandler}
            />
          ))
        }
    </ul>
  );
};

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      author: PropTypes.string,
      nbreChp: PropTypes.number,
      crtChp: PropTypes.number,
      category: PropTypes.string,
    }),
  ).isRequired,
  removeHandler: PropTypes.func.isRequired,
};
export default BookList;
