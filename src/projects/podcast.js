// src/projects/playingcards.js
import React from 'react';
import '../styles/reset.css';
import '../styles/App.css';
import '../styles/narrow.css';

// Import all image variants
import img4_400 from '../images/podcasts-image-04-400.webp';
import img4_600 from '../images/podcasts-image-04-600.webp';
import img4_800 from '../images/podcasts-image-04-800.webp';
import img4_1000 from '../images/podcasts-image-04-1000.webp';
import img4_1400 from '../images/podcasts-image-04-1400.webp';
import img4_1600 from '../images/podcasts-image-04-1600.webp';

import img1_400 from '../images/podcasts-image-01-400.webp';
import img1_600 from '../images/podcasts-image-01-600.webp';
import img1_800 from '../images/podcasts-image-01-800.webp';
import img1_1000 from '../images/podcasts-image-01-1000.webp';
import img1_1400 from '../images/podcasts-image-01-1400.webp';
import img1_1600 from '../images/podcasts-image-01-1600.webp';

import img2_400 from '../images/podcasts-image-02-400.webp';
import img2_600 from '../images/podcasts-image-02-600.webp';
import img2_800 from '../images/podcasts-image-02-800.webp';
import img2_1000 from '../images/podcasts-image-02-1000.webp';
import img2_1400 from '../images/podcasts-image-02-1400.webp';
import img2_1600 from '../images/podcasts-image-02-1600.webp';

import img3_400 from '../images/podcasts-image-03-400.webp';
import img3_600 from '../images/podcasts-image-03-600.webp';
import img3_800 from '../images/podcasts-image-03-800.webp';
import img3_1000 from '../images/podcasts-image-03-1000.webp';
import img3_1400 from '../images/podcasts-image-03-1400.webp';
import img3_1600 from '../images/podcasts-image-03-1600.webp';

export default function Podcast() {
  return (
    <div className="maxcontainerwidth">
      <div className="project">
        <div className="projectdescription">
          <h1 id="projectTitle">Podcast Art</h1>
          <p>I have created three distinct podcast identities for a company, each of which is a sub-brand of the parent brand IAED. The first podcast, AEDR Dispatch in Depth, is dedicated to exploring the science and research that underpins the IAED dispatching protocols. The second podcast, Coming up ACEs, focuses on the accreditation process within the IAED accreditation program. The third podcast is centered around quality assurance professionals who listen or “Q” to coach dispatchers to improve their performance in their challenging job.</p>
          <p id="software">Software</p>
          <ul>
            <li>Illustrator</li>
            <li>InDesign</li>
          </ul>
            <p><a href="../" class="returnbutton">All Projects</a></p>
        </div>
        <div className="projectdetailimages">
            <img
              aria-label="Person’s hand holding a smartphone showing a podcast app interface featuring 'Tell me exactly…' podcast."
              srcSet={`${img4_400} 400w, ${img4_600} 600w, ${img4_800} 800w, ${img4_1000} 1000w, ${img4_1400} 1400w, ${img4_1600} 1600w`}
              src={img4_1600}
              className="projectdetailimg boximghov"
              alt="smartphone showing podcast app interface featuring 'Tell me exactly…' podcast"
            />

            <img
              aria-label="Podcast cover art for four podcasts: 'COMING UP ACES,' 'Tell me exactly…,' 'DISPATCH IN DEPTH,' and 'REVIEW' by IAED."
              srcSet={`${img1_400} 400w, ${img1_600} 600w, ${img1_800} 800w, ${img1_1000} 1000w, ${img1_1400} 1400w, ${img1_1600} 1600w`}
              src={img1_1600}
              className="projectdetailimg boximghov"
              alt="Podcast cover art for four podcasts"
            />

            <img
              aria-label="Three screenshots from a podcast app showing the 'Listen Now,' currently playing episode 'COMING UP ACES,' and 'Library Shows' sections."
              srcSet={`${img2_400} 400w, ${img2_600} 600w, ${img2_800} 800w, ${img2_1000} 1000w, ${img2_1400} 1400w, ${img2_1600} 1600w`}
              src={img2_1600}
              className="projectdetailimg boximghov"
              alt="Three screenshots from a podcast app"
            />
            <img
              aria-label="Close-up of a hand holding a smartphone displaying a podcast app with 'Dispatch in Depth' by AEDR."
              srcSet={`${img3_400} 400w, ${img3_600} 600w, ${img3_800} 800w, ${img3_1000} 1000w, ${img3_1400} 1400w, ${img3_1600} 1600w`}
              src={img3_1600}
              className="projectdetailimg boximghov"
              alt="Close-up of a hand holding a smartphone displaying a podcast app"
            />
          </div>
      </div>
    </div>
  );
}