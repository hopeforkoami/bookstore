import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { bookdata } = props;
  const clickHandler = () => {
    console.log('test');
  };
  console.log(props);
  const readingPrctg = Math.floor((bookdata.crtChp / bookdata.nbreChp) * 100);
  return (
    <li className="bookElmt">
      <div className="bookDetails">
        <span className="book_categorie">{bookdata.category}</span>
        <span className="book_title">{bookdata.title}</span>
        <span className="book_author">{bookdata.author}</span>
        <ul className="book_actions">
          <li className="book_actions_elmt book_actions_elmt_first book_comment">Comments</li>
          <button type="button" className="book_actions_elmt book_edit" onClick={clickHandler}>Remove</button>

          <li className="book_actions_elmt book_edit">Edit</li>
        </ul>
      </div>
      <div className="together_details">
        <div className="reading_progress">
          <CircularProgressbar
            className="progress_diagram"
            value={readingPrctg}
            text={`${readingPrctg}%`}
          />

          <div className="progress_details">
            <span className="progress_pourcentage">{`${readingPrctg}%`}</span>
            <span className="progress_statut">Completed</span>
          </div>
        </div>
        <div className="divider" />
        <div className="more_action">
          <span className="current_chapter_label">CURRENT CHAPTER</span>
          <span className="current_chapter">{`Chapter : ${readingPrctg}`}</span>
          <button type="button" className="button_update_progress"> UPDATE PROGRESS</button>
        </div>
      </div>

    </li>
  );
};

Book.propTypes = {
  bookdata: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.string,
    nbreChp: PropTypes.number,
    crtChp: PropTypes.number,
    category: PropTypes.string,
  }).isRequired,
  //  removeBookFromList: PropTypes.func.isRequired,
};
export default Book;
