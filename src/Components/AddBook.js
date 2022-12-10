import React from "react";

const AddBook = () =>(
  <div className="add_section">
    <h2 className="form_title">ADD NEW BOOK</h2>
    <form className="form">
      <input className="add_input input" type="te" name="bookTitle" placeholder="Book Title" />
      <select className="input category_input">
        <option value="Action">Action</option>
        <option value="Fiction">Science Fiction</option>
        <option value="Economy">Economy</option>
      </select>
      <button className="add_button" type="submit">ADD BOOK</button>
    </form>
  </div>
  );

export default AddBook;