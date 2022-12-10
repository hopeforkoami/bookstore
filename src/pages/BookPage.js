import React from "react";
import AddBook from "../Components/AddBook";
import BookList from "../Components/BookList";
import Header from "../Components/Header";
const bookData = [
  {
    "id":1,
    "title":"The Hunger Games",
    "author":"Suzanne Collins",
    "nbreChp":25,
    "crtChp":10,
    "category":"Action"
  },
  {
    "id":2,
    "title":"Dune",
    "author":"Frank Herbert",
    "nbreChp":40,
    "crtChp":8,
    "category":"Science Fiction"
  },
  {
    "id":3,
    "title":"Test 3 Book",
    "author":"test3 Author",
    "nbreChp":15,
    "crtChp":5,
    "category":"test Category"
  },
  {
    "id":4,
    "title":"Capital in the Twenty-First Century",
    "author":"Suzanne Collins",
    "nbreChp":60,
    "crtChp":0,
    "category":"Economy"
  },
];
const BookPage = () =>(
  <div className='container'>
    <Header />
    <section className="section">
      <BookList books = {bookData} />
      <div class="grand_divider"></div>
      <AddBook />
    </section>
    
  </div>
  );

export default BookPage;