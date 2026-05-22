// src/projects/fitnesscampaign.js
import React from 'react';
import '../styles/reset.css';
import '../styles/App.css';
import '../styles/narrow.css';

// Import all image variants
import img1_400 from '../images/1up2down-image-01-400.webp';
import img1_600 from '../images/1up2down-image-01-600.webp';
import img1_800 from '../images/1up2down-image-01-800.webp';
import img1_1000 from '../images/1up2down-image-01-1000.webp';
import img1_1400 from '../images/1up2down-image-01-1400.webp';
import img1_1600 from '../images/1up2down-image-01-1600.webp';

import img2_400 from '../images/1up2down-image-02-400.webp';
import img2_600 from '../images/1up2down-image-02-600.webp';
import img2_800 from '../images/1up2down-image-02-800.webp';
import img2_1000 from '../images/1up2down-image-02-1000.webp';
import img2_1400 from '../images/1up2down-image-02-1400.webp';
import img2_1600 from '../images/1up2down-image-02-1600.webp';

import img3_400 from '../images/1up2down-image-03-400.webp';
import img3_600 from '../images/1up2down-image-03-600.webp';
import img3_800 from '../images/1up2down-image-03-800.webp';
import img3_1000 from '../images/1up2down-image-03-1000.webp';
import img3_1400 from '../images/1up2down-image-03-1400.webp';
import img3_1600 from '../images/1up2down-image-03-1600.webp';

import img4_400 from '../images/1up2down-image-04-400.webp';
import img4_600 from '../images/1up2down-image-04-600.webp';
import img4_800 from '../images/1up2down-image-04-800.webp';
import img4_1000 from '../images/1up2down-image-04-1000.webp';
import img4_1400 from '../images/1up2down-image-04-1400.webp';
import img4_1600 from '../images/1up2down-image-04-1600.webp';

import img5_400 from '../images/1up2down-image-05-400.webp';
import img5_600 from '../images/1up2down-image-05-600.webp';
import img5_800 from '../images/1up2down-image-05-800.webp';
import img5_1000 from '../images/1up2down-image-05-1000.webp';
import img5_1400 from '../images/1up2down-image-05-1400.webp';
import img5_1600 from '../images/1up2down-image-05-1600.webp';

export default function FitnessCampaign() {
  return (
    <div className="maxcontainerwidth">
      <div className="project">
        <div className="projectdescription">
          <h1 id="projectTitle">Fitness Campaign - 1 Up 2 Down</h1>
          <p>Due to the upcoming elevator closures in the office, my employer decided to replace the elevators. To encourage employees to take the stairs more during the construction, we turned it into an opportunity to create a fitness challenge for the office. The challenge was designed to motivate employees to climb stairs and track their progress. It not only would helped them stay active but also fostered a sense of community among them. I was responsible for designing the fitness game and producing the materials in 3 days. The materials included t-shirts, a workbook for tracking flights climbed, stickers, stair and elevator graphics. The game was received positively from the directors.</p>
          <p id="software">Software</p>
          <ul>
            <li>Illustrator</li>
            <li>InDesign</li>
            <li>Photoshop</li>
          </ul>
            <p><a href="../" class="returnbutton">All Projects</a></p>
        </div>
        <div className="projectdetailimages">
            <img
              aria-label="Stylized graphic with the words 'ONE UP' and '2 DOWN' in varying font sizes, flanked by an upward and downward arrow, displayed against a textured gradient orange background."
              srcSet={`${img1_400} 400w, ${img1_600} 600w, ${img1_800} 800w, ${img1_1000} 1000w, ${img1_1400} 1400w, ${img1_1600} 1600w`}
              src={img1_1600}
              className="projectdetailimg boximghov"
              alt="Fitness campaign 1"
            />

            <img
              aria-label="Two gray T-shirts displayed front and back with minimalistic orange and white logo on the left chest and iconography below, accompanied by a vertical 'ONEUP 2DOWN' text logo and a color swatch."
              srcSet={`${img2_400} 400w, ${img2_600} 600w, ${img2_800} 800w, ${img2_1000} 1000w, ${img2_1400} 1400w, ${img2_1600} 1600w`}
              src={img2_1600}
              className="projectdetailimg boximghov"
              alt="Fitness campaign 2"
            />

            <img
              aria-label="Promotional material including an orange 'ONE UP TWO DOWN PASSPORT' booklet, a white informational sheet with mountain statistics and a visual elevation scale, and six badges with mountain outlines and elevation details."
              srcSet={`${img3_400} 400w, ${img3_600} 600w, ${img3_800} 800w, ${img3_1000} 1000w, ${img3_1400} 1400w, ${img3_1600} 1600w`}
              src={img3_1600}
              className="projectdetailimg boximghov"
              alt="Fitness campaign 3"
            />

            <img
              aria-label="Two elevator doors on floor 3, one orange with motivational text, 'ONE UP 2 DOWN. Take the stairs. It's faster than the elevator,' and one gray with similar stair-promoting text. A directory panel is situated between the doors."
              srcSet={`${img4_400} 400w, ${img4_600} 600w, ${img4_800} 800w, ${img4_1000} 1000w, ${img4_1400} 1400w, ${img4_1600} 1600w`}
              src={img4_1600}
              className="projectdetailimg boximghov"
              alt="Fitness campaign 4"
            />

            <img
              aria-label="Modern indoor staircase with light wood steps and dark gray risers with motvational text, 'stairs make you sexy' and One Up Two Down logo."
              srcSet={`${img5_400} 400w, ${img5_600} 600w, ${img5_800} 800w, ${img5_1000} 1000w, ${img5_1400} 1400w, ${img5_1600} 1600w`}
              src={img5_1600}
              className="projectdetailimg boximghov"
              alt="Fitness campaign 5"
            />
          </div>
      </div>
    </div>
  );
}