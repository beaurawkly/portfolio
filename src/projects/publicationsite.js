// src/projects/publicationsite.js
import React from 'react';
import '../styles/reset.css';
import '../styles/App.css';
import '../styles/narrow.css';

// Import all image variants
import img1_400 from '../images/journalsite-image-01-400.webp';
import img1_600 from '../images/journalsite-image-01-600.webp';
import img1_800 from '../images/journalsite-image-01-800.webp';
import img1_1000 from '../images/journalsite-image-01-1000.webp';
import img1_1400 from '../images/journalsite-image-01-1400.webp';
import img1_1600 from '../images/journalsite-image-01-1600.webp';

import img2_400 from '../images/journalsite-image-02-400.webp';
import img2_600 from '../images/journalsite-image-02-600.webp';
import img2_800 from '../images/journalsite-image-02-800.webp';
import img2_1000 from '../images/journalsite-image-02-1000.webp';
import img2_1400 from '../images/journalsite-image-02-1400.webp';
import img2_1600 from '../images/journalsite-image-02-1600.webp';

import img3_400 from '../images/journalsite-images-home-400.webp';
import img3_600 from '../images/journalsite-images-home-600.webp';
import img3_800 from '../images/journalsite-images-home-800.webp';
import img3_1000 from '../images/journalsite-images-home-1000.webp';
import img3_1400 from '../images/journalsite-images-home-1400.webp';
import img3_1600 from '../images/journalsite-images-home-1600.webp';

export default function PublicationSite() {
  return (
    <div className="maxcontainerwidth">
      <div className="project">
        <div className="projectdescription">
          <h1 id="projectTitle">Publication Site</h1>
          <p>This project as a redesign of the wordpress site in order to update the tech. stack. The process took an exsisting wordpress site and design to be a sister brand to the parent company. The process took about 3 days before the hand off to the devops team.<br/><a href="https://www.iaedjournal.org/" target="_blank" rel="noopener noreferrer">iaedjournal.org</a></p>
          <p id="software">Software</p>
          <ul>
            <li>Figma</li>
            <li>XD</li>
            <li>Illustrator</li>
            <li>Photoshop</li>
          </ul>
            <p><a href="../" class="returnbutton">All Projects</a></p>
        </div>
        <div className="projectdetailimages">
            <img
              aria-label="A purple 'IAED' box with two playing cards partially pulled out."
              srcSet={`${img1_400} 400w, ${img1_600} 600w, ${img1_800} 800w, ${img1_1000} 1000w, ${img1_1400} 1400w, ${img1_1600} 1600w`}
              src={img1_1600}
              className="projectdetailimg boximghov"
              alt="Playing cards 1"
            />

            <img
              aria-label="Set of playing cards showcasing modern designs with various ranks and suits."
              srcSet={`${img2_400} 400w, ${img2_600} 600w, ${img2_800} 800w, ${img2_1000} 1000w, ${img2_1400} 1400w, ${img2_1600} 1600w`}
              src={img2_1600}
              className="projectdetailimg boximghov"
              alt="Playing cards 2"
            />

            <img
              aria-label="A hand holding seven playing cards with a table of scattered cards in the background."
              srcSet={`${img3_400} 400w, ${img3_600} 600w, ${img3_800} 800w, ${img3_1000} 1000w, ${img3_1400} 1400w, ${img3_1600} 1600w`}
              src={img3_1600}
              className="projectdetailimg boximghov"
              alt="Playing cards 3"
            />
          </div>
      </div>
    </div>
  );
}