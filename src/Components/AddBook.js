import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

const AddBook = (props) => {
  const { addBookHandler } = props;

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    addBookHandler({
      id: v4(),
      title,
      author,
      nbreChp: 26,
      crtChp: 0,
      category: 'Unknown',
    });
    setTitle('');
    setAuthor('');
  };
  return (
    <div className="add_section">
      <h2 className="form_title">ADD NEW BOOK</h2>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <input
          className="add_input input"
          type="te"
          name="bookTitle"
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="add_input input"
          type="te"
          name="author"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button className="add_button" type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};
AddBook.propTypes = {
  addBookHandler: PropTypes.func.isRequired,
};
export default AddBook;
