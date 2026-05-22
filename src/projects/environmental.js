// src/projects/environmental.js
import React from 'react';
import '../styles/reset.css';
import '../styles/App.css';
import '../styles/narrow.css';

// Import all image variants
import img1_400 from '../images/navigator-image-01-400.webp';
import img1_600 from '../images/navigator-image-01-600.webp';
import img1_800 from '../images/navigator-image-01-800.webp';
import img1_1000 from '../images/navigator-image-01-1000.webp';
import img1_1400 from '../images/navigator-image-01-1400.webp';
import img1_1600 from '../images/navigator-image-01-1600.webp';

import img2_400 from '../images/navigator-image-02-400.webp';
import img2_600 from '../images/navigator-image-02-600.webp';
import img2_800 from '../images/navigator-image-02-800.webp';
import img2_1000 from '../images/navigator-image-02-1000.webp';
import img2_1400 from '../images/navigator-image-02-1400.webp';
import img2_1600 from '../images/navigator-image-02-1600.webp';

import img3_400 from '../images/navigator-image-03-400.webp';
import img3_600 from '../images/navigator-image-03-600.webp';
import img3_800 from '../images/navigator-image-03-800.webp';
import img3_1000 from '../images/navigator-image-03-1000.webp';
import img3_1400 from '../images/navigator-image-03-1400.webp';
import img3_1600 from '../images/navigator-image-03-1600.webp';

import img4_400 from '../images/navigator-image-04-400.webp';
import img4_600 from '../images/navigator-image-04-600.webp';
import img4_800 from '../images/navigator-image-04-800.webp';
import img4_1000 from '../images/navigator-image-04-1000.webp';
import img4_1400 from '../images/navigator-image-04-1400.webp';
import img4_1600 from '../images/navigator-image-04-1600.webp';

import img5_400 from '../images/navigator-image-05-400.webp';
import img5_600 from '../images/navigator-image-05-600.webp';
import img5_800 from '../images/navigator-image-05-800.webp';
import img5_1000 from '../images/navigator-image-05-1000.webp';
import img5_1400 from '../images/navigator-image-05-1400.webp';
import img5_1600 from '../images/navigator-image-05-1600.webp';

export default function Environmental() {
  return (
    <div className="maxcontainerwidth">
      <div className="project">
        <div className="projectdescription">
          <h1 id="projectTitle">Environmental Design</h1>
          <p>For over a decade, I have had the privilege of designing and executing an annual conference with a small team of three. Our primary responsibility was to create environmental graphics that would enhance the overall experience of the attendees. Despite the challenges we faced every year due to the conference being held in a new location, we managed to create an unforgettable experience for everyone. We achieved this by creating apps, photobooths, and parties, as well as designing eye-catching signage and staging graphics. Our efforts were well-received by the attendees, and we received positive feedback every year.</p>
          <p id="software">Software</p>
          <ul>
            <li>Illustrator</li>
            <li>InDesign</li>
            <li>Photoshop</li>
            <li>After Effects</li>
            <li>Premiere Pro</li>
          </ul>
            <p><a href="../" class="returnbutton">All Projects</a></p>
        </div>
        <div className="projectdetailimages">
            <img
              aria-label="A purple 'IAED' box with two playing cards partially pulled out."
              srcSet={`${img1_400} 400w, ${img1_600} 600w, ${img1_800} 800w, ${img1_1000} 1000w, ${img1_1400} 1400w, ${img1_1600} 1600w`}
              src={img1_1600}
              className="projectdetailimg boximghov"
              alt="Environmental design 1"
            />

            <img
              aria-label="Set of playing cards showcasing modern designs with various ranks and suits."
              srcSet={`${img2_400} 400w, ${img2_600} 600w, ${img2_800} 800w, ${img2_1000} 1000w, ${img2_1400} 1400w, ${img2_1600} 1600w`}
              src={img2_1600}
              className="projectdetailimg boximghov"
              alt="Environmental design 2"
            />

            <img
              aria-label="A hand holding seven playing cards with a table of scattered cards in the background."
              srcSet={`${img3_400} 400w, ${img3_600} 600w, ${img3_800} 800w, ${img3_1000} 1000w, ${img3_1400} 1400w, ${img3_1600} 1600w`}
              src={img3_1600}
              className="projectdetailimg boximghov"
              alt="Environmental design 3"
            />
            <img
              aria-label="A close-up of a playing card with a detailed design."
              srcSet={`${img4_400} 400w, ${img4_600} 600w, ${img4_800} 800w, ${img4_1000} 1000w, ${img4_1400} 1400w, ${img4_1600} 1600w`}
              src={img4_1600}
              className="projectdetailimg boximghov"
              alt="Environmental design 4"
            />
            <img
              aria-label="A stack of playing cards with a gradient background."
              srcSet={`${img5_400} 400w, ${img5_600} 600w, ${img5_800} 800w, ${img5_1000} 1000w, ${img5_1400} 1400w, ${img5_1600} 1600w`}
              src={img5_1600}
              className="projectdetailimg boximghov"
              alt="Environmental design 5"
            />
          </div>
      </div>
    </div>
  );
}