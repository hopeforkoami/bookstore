import React from 'react';

const AddBook = () => (
  <div className="add_section">
    <h2 className="form_title">ADD NEW BOOK</h2>
    <form className="form">
      <input className="add_input input" type="te" name="bookTitle" placeholder="Book Title" />
      <input className="add_input input" type="te" name="author" placeholder="Author" />
      <button className="add_button" type="submit">ADD BOOK</button>
    </form>
  </div>
);

export default AddBook;
