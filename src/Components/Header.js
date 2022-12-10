import React from 'react';
import { Link } from 'react-router-dom';
import { BsPersonCircle } from 'react-icons/bs';

const Header = () => (
  <header>
			<div class="together_Header_elmts">
				<div class="project_title">	
							Bookstore CMS
				</div>	
				<nav>
					<ul class="menu">
						<li class="menu_element start_menu_element selected_menu_element">BOOKS</li>
						<li class="menu_element">CATEGORIES</li>
					</ul>
				</nav>
			</div>
			<button>
				<BsPersonCircle />
			</button>
				
		</header>
);

export default Header;