import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const BookList = (props) => {
  const { books } = props;
  return (
    <ul className="booklist">
      {
          books.map((bookElment) => (
            <Book
              key={bookElment.id}
              bookdata={bookElment}
            />
          ))
        }
    </ul>
  );
};

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      author: PropTypes.string,
      nbreChp: PropTypes.number,
      crtChp: PropTypes.number,
      category: PropTypes.string,
    }),
  ).isRequired,
};
export default BookList;
