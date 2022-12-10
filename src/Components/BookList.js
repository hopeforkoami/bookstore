import React from 'react';
import AddBook from './AddBook';
import Book from './Book';
import Header from './Header';

const BookList = (props) =>{
  const {books} = props;
  return(
    <ul class="booklist">
        {
          books.map((book)=>(
            <Book 
            key={book.id}
            bookdata = {book}
            />
            ))
        }  

    </ul>
    );
}

export default BookList;