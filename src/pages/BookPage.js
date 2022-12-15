import React from 'react';
import { useSelector } from 'react-redux';
import AddBook from '../Components/AddBook';
import BookList from '../Components/BookList';
import Header from '../Components/Header';

const BookPage = () => {
  const bookData = useSelector((state) => state.books);
  return (
    <div className="container">
      <Header />
      <section className="section">
        <BookList books={bookData} />
        <div className="grand_divider" />
        <AddBook />
      </section>

    </div>
  );
};

export default BookPage;
