import React from 'react';
import logo from '../logo.svg';

const menuItems = [
  { label: 'All Work', href: 'index.html' },
  { label: 'About', href: 'about.html' },
];

export default function MenuBar() {
  return (
    <div id="menubar">
      <div id="menu" className="maxcontainerwidth">
        <div className="mainlogo">
          <a href="index.html">
            <img src={logo} alt="reeding logo" />
          </a>
          <a href="index.html">
            <p>Reeding</p>
          </a>
        </div>

        <ul>
          {menuItems.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
