// src/projects/playingcards.js
import React from 'react';
import '../styles/reset.css';
import '../styles/App.css';
import '../styles/narrow.css';

// Import all image variants
import img1_400 from '../images/iaedplayingcards-image-01-400.webp';
import img1_600 from '../images/iaedplayingcards-image-01-600.webp';
import img1_800 from '../images/iaedplayingcards-image-01-800.webp';
import img1_1000 from '../images/iaedplayingcards-image-01-1000.webp';
import img1_1400 from '../images/iaedplayingcards-image-01-1400.webp';
import img1_1600 from '../images/iaedplayingcards-image-01-1600.webp';

import img2_400 from '../images/iaedplayingcards-image-02-400.webp';
import img2_600 from '../images/iaedplayingcards-image-02-600.webp';
import img2_800 from '../images/iaedplayingcards-image-02-800.webp';
import img2_1000 from '../images/iaedplayingcards-image-02-1000.webp';
import img2_1400 from '../images/iaedplayingcards-image-02-1400.webp';
import img2_1600 from '../images/iaedplayingcards-image-02-1600.webp';

import img3_400 from '../images/iaedplayingcards-image-03-400.webp';
import img3_600 from '../images/iaedplayingcards-image-03-600.webp';
import img3_800 from '../images/iaedplayingcards-image-03-800.webp';
import img3_1000 from '../images/iaedplayingcards-image-03-1000.webp';
import img3_1400 from '../images/iaedplayingcards-image-03-1400.webp';
import img3_1600 from '../images/iaedplayingcards-image-03-1600.webp';

export default function PlayingCards() {
  return (
    <div className="maxcontainerwidth">
      <div className="project">
        <div className="projectdescription">
          <h1 id="projectTitle">Playing Cards</h1>
          <p>I was commissioned to create an engaging playing card design that embodies the visual language and brand of the International Academies of Emergency Dispatch (IAED) while listing all of their products and services. To achieve this, I incorporated symbols representing the four disciplines of emergency dispatching (medical, fire, police, nurse triage) inside the four suits. This design allows the cards to be played as standard playing cards. The face cards were designed to feature different dispatchers.</p>
          <p id="software">Software</p>
          <ul>
            <li>Illustrator</li>
            <li>InDesign</li>
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