import React from 'react';
import { Link } from 'react-router-dom';

const footerLinks = [
  { label: 'Portfolio', to: '/' },
  { label: 'About', to: '/about' },
];

export default function Footer() {
  return (
    <div id="footer" className="maxcontainerwidth">
      <p className="footerlinks">
        {footerLinks.map((item) => (
          <Link key={item.to} to={item.to}>
            {item.label}
          </Link>
        ))}
      </p>
      <p>
        © 2026 Reeding All images and content are property of Reeding. For questions or permissions contact me.
      </p>
    </div>
  );
}
