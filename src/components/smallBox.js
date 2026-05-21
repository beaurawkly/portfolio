import React from 'react';

export default function SmallBox({ title, href, linkLabel,imageSrc, altText }) {
  return (
    <div className="box boxhover colbox boximghov">
      <a aria-label={linkLabel} href={href}>
        <img
          aria-label={altText}
          src={imageSrc}
          className="featureimages"
          alt={altText}
        />
        <div className="content">
          <h5>{title}</h5>
        </div>
      </a>
    </div>
  );
}
