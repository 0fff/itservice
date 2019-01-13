import React from 'react';
import { Link } from 'react-router-dom';
import { FaSignInAlt } from 'react-icons/fa';
import './style.scss';

const Header = () => (
  <div className="top-bar">
    <div className="wrapper">
      <ul className="navigation">
        <li><Link to="/home">Документы</Link></li>
        <li><Link to="/123">Отчеты</Link></li>
        <li><Link to="/Editorg">Редакт</Link></li>
      </ul>
      <div className="top-bar-right">
        <a href="#">
          <FaSignInAlt size={14} />
          Войти
        </a>
      </div>
    </div>
  </div>
);

export default Header;
//            <li><Link to="/Documents">Документы</Link></li>
