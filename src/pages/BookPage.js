import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddBook from '../Components/AddBook';
import BookList from '../Components/BookList';
import Header from '../Components/Header';
import { removeBookAction, addBookAction } from '../redux/books/book';

const BookPage = () => {
  const bookData = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const removeBookFromList = (idBook) => {
    dispatch(removeBookAction(idBook));
  };
  const addBookToList = (abook) => {
    dispatch(addBookAction(abook));
  };
  return (
    <div className="container">
      <Header />
      <section className="section">
        <BookList books={bookData} removeHandler={removeBookFromList} />
        <div className="grand_divider" />
        <AddBook addBookHandler={addBookToList} />
      </section>

    </div>
  );
};

export default BookPage;
