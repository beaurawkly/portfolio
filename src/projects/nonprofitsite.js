// src/projects/nonprofitsite.js
import React from 'react';
import '../styles/reset.css';
import '../styles/App.css';
import '../styles/narrow.css';

// Import all image variants
import img1_400 from '../images/iaedsite-image-01-400.webp';
import img1_600 from '../images/iaedsite-image-01-600.webp';
import img1_800 from '../images/iaedsite-image-01-800.webp';
import img1_1000 from '../images/iaedsite-image-01-1000.webp';
import img1_1400 from '../images/iaedsite-image-01-1400.webp';
import img1_1600 from '../images/iaedsite-image-01-1600.webp';

import img2_400 from '../images/iaedsite-image-02-400.webp';
import img2_600 from '../images/iaedsite-image-02-600.webp';
import img2_800 from '../images/iaedsite-image-02-800.webp';
import img2_1000 from '../images/iaedsite-image-02-1000.webp';
import img2_1400 from '../images/iaedsite-image-02-1400.webp';
import img2_1600 from '../images/iaedsite-image-02-1600.webp';

import img3_400 from '../images/iaedsite-images-home-400.webp';
import img3_600 from '../images/iaedsite-images-home-600.webp';
import img3_800 from '../images/iaedsite-images-home-800.webp';
import img3_1000 from '../images/iaedsite-images-home-1000.webp';
import img3_1400 from '../images/iaedsite-images-home-1400.webp';
import img3_1600 from '../images/iaedsite-images-home-1600.webp';

export default function NonprofitSite() {
  return (
    <div className="maxcontainerwidth">
      <div className="project">
        <div className="projectdescription">
          <h1 id="projectTitle">Nonprofit Site</h1>
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
              aria-label="Screenshot of the International Academies of Emergency Dispatch (IAED) website homepage showing navigation options, an image of a female dispatcher, and a description of IAED's mission and protocols."
              srcSet={`${img1_400} 400w, ${img1_600} 600w, ${img1_800} 800w, ${img1_1000} 1000w, ${img1_1400} 1400w, ${img1_1600} 1600w`}
              src={img1_1600}
              className="projectdetailimg boximghov"
              alt="Nonprofit site 1"
            />

            <img
              aria-label="Screenshot of IAED Resource Library webpage showing available protocols and policies, with a segment explaining the resources provided."
              srcSet={`${img2_400} 400w, ${img2_600} 600w, ${img2_800} 800w, ${img2_1000} 1000w, ${img2_1400} 1400w, ${img2_1600} 1600w`}
              src={img2_1600}
              className="projectdetailimg boximghov"
              alt="Nonprofit site 2"
            />

            <img
              aria-label="Screenshot of the International Academies of Emergency Dispatch (IAED) website, presenting their mission, emergency dispatch protocols, updates, and contact information."
              srcSet={`${img3_400} 400w, ${img3_600} 600w, ${img3_800} 800w, ${img3_1000} 1000w, ${img3_1400} 1400w, ${img3_1600} 1600w`}
              src={img3_1600}
              className="projectdetailimg boximghov"
              alt="Nonprofit site 3"
            />
          </div>
      </div>
    </div>
  );
}