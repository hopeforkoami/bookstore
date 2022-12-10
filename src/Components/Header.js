import React from 'react';
import { Link } from 'react-router-dom';
import { BsPersonCircle } from 'react-icons/bs';
import { IconContext } from 'react-icons';

const Header = () => (
  <header>
    <div className="together_Header_elmts">
      <div className="project_title">
        Bookstore CMS
      </div>
      <nav>
        <ul className="menu">
          <Link to="/"><li className="menu_element start_menu_element selected_menu_element">BOOKS</li></Link>
          <Link to="/"><li className="menu_element">CATEGORIES</li></Link>
        </ul>
      </nav>
    </div>
    <IconContext.Provider value={{ color: '#0290ff', className: 'profil_button' }}>
      <div>
        <BsPersonCircle />
      </div>
    </IconContext.Provider>

  </header>
);

export default Header;
