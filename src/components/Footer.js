import React from 'react';

const footerLinks = [
  { label: 'Portfolio', href: 'index.html' },
  { label: 'About', href: 'about.html' },
];

export default function Footer() {
  return (
    <div id="footer" className="maxcontainerwidth">
      <p className="footerlinks">
        {footerLinks.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </p>
      <p>
        © 2026 Reeding All images and content are property of Reeding. For questions or permissions contact me.
      </p>
    </div>
  );
}
