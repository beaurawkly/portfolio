import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

const menuItems = [
  { label: 'All Work', to: '/' },
  { label: 'About', to: '/about' },
];

export default function MenuBar() {
  return (
    <div id="menubar">
      <div id="menu" className="maxcontainerwidth">
        <div className="mainlogo">
          <Link to="/">
            <img src={logo} alt="reeding logo" />
          </Link>
          <Link to="/">
            <p>Reeding</p>
          </Link>
        </div>

        <ul>
          {menuItems.map((item) => (
            <li key={item.to}>
              <Link to={item.to}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}