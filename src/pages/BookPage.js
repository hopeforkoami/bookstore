import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddBook from '../Components/AddBook';
import BookList from '../Components/BookList';
import Header from '../Components/Header';
import { removeBookAction } from '../redux/books/book';

const BookPage = () => {
  const bookData = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const removeBookFromList = (idBook) => {
    console.log(`remove book triggred${idBook}`);
    dispatch(removeBookAction(idBook));
  };
  return (
    <div className="container">
      <Header />
      <section className="section">
        <BookList books={bookData} removeHandler={removeBookFromList} />
        <div className="grand_divider" />
        <AddBook />
      </section>

    </div>
  );
};

export default BookPage;
