import React from 'react';
import { Link } from 'react-router-dom';

export default function SmallBox({ title, href, to, linkLabel, imageSrc, altText }) {
  const LinkComponent = to ? Link : 'a';
  const linkProps = to ? { to } : { href };

  return (
    <div className="featurebox boxhover">
      <LinkComponent aria-label={linkLabel} {...linkProps}>
        <h2>{title}</h2>
            <img
                aria-label={altText}
                src={imageSrc}
                className="featureimages"
                alt={altText}
            />
      </LinkComponent>
    </div>
  );
}



