import React from "react";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const Book = (props) =>{
const {bookdata} = props
const readingPrctg = Math.floor((bookdata.crtChp / bookdata.nbreChp) * 100) ;
  return(
    <li class="bookElmt">
            <div className="bookDetails">
              <span className="book_categorie">{bookdata.category}</span>
              <span className="book_title">{bookdata.title}</span>
              <span className="book_author">{bookdata.author}</span>
              <ul className="book_actions">
                <li className="book_actions_elmt book_actions_elmt_first book_comment">Comments</li>
                <li className="book_actions_elmt book_remove">Remove</li>
                <li className="book_actions_elmt book_edit">Edit</li>
              </ul>
            </div>
            <div className="together_details">
              <div className="reading_progress">
              <CircularProgressbar className="progress_diagram" value={readingPrctg} text={`${readingPrctg}%`} />;
              <div className="progress_details">
                <span className="progress_pourcentage">{`${readingPrctg}%`}</span>
                <span className="progress_statut">Completed</span>
              </div>
            </div>
            <div className="divider"></div>
            <div className="more_action">
              <span className="current_chapter_label">CURRENT CHAPTER</span>
              <span className="current_chapter">{`Chapter : ${readingPrctg}`}</span>
              <button className="button_update_progress"> UPDATE PROGRESS</button>
            </div>
            </div>
            
          </li>
    );
}


  export default Book;