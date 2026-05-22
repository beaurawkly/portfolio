// src/projects/corevalues.js
import React from 'react';
import '../styles/reset.css';
import '../styles/App.css';
import '../styles/narrow.css';

// Import all image variants
import img1_400 from '../images/corevalues-image-01-400.webp';
import img1_600 from '../images/corevalues-image-01-600.webp';
import img1_800 from '../images/corevalues-image-01-800.webp';
import img1_1000 from '../images/corevalues-image-01-1000.webp';
import img1_1400 from '../images/corevalues-image-01-1400.webp';
import img1_1600 from '../images/corevalues-image-01-1600.webp';

import img2_400 from '../images/corevalues-image-02-400.webp';
import img2_600 from '../images/corevalues-image-02-600.webp';
import img2_800 from '../images/corevalues-image-02-800.webp';
import img2_1000 from '../images/corevalues-image-02-1000.webp';
import img2_1400 from '../images/corevalues-image-02-1400.webp';
import img2_1600 from '../images/corevalues-image-02-1600.webp';

import img3_400 from '../images/corevalues-image-03-400.webp';
import img3_600 from '../images/corevalues-image-03-600.webp';
import img3_800 from '../images/corevalues-image-03-800.webp';
import img3_1000 from '../images/corevalues-image-03-1000.webp';
import img3_1400 from '../images/corevalues-image-03-1400.webp';
import img3_1600 from '../images/corevalues-image-03-1600.webp';

export default function CoreValues() {
  return (
    <div className="maxcontainerwidth">
      <div className="project">
        <div className="projectdescription">
          <h1 id="projectTitle">Core Values</h1>
          <p>The core values of a company help create a sense of achievement, guide decision-making processes, and are the foundation of the company&rsquo;s culture and identity. After four areas of the core values had been identified and written, I translated them into a visual campaign that encapsulated the defined values. This campaign was designed to communicate the values in a clear and concise manner, making them more accessible to employees. By translating the core values into a visual campaign, I was able to create a cohesive message that resonated with everyone in the company. I created icons, t-shirts, posters, wallpapers, video introduction, and environmental graphics for the office. These visual elements helped reinforce the core values and made them more memorable.</p>
          <p id="software">Software</p>
          <ul>
            <li>Illustrator</li>
            <li>InDesign</li>
          </ul>
            <p><a href="../" class="returnbutton">All Projects</a></p>
        </div>
        <div className="projectdetailimages">
            <img
              aria-label="CORE VALUES with icons: rocket, eye, triangle, and light bulb. Below: BE COMMITTED TO THE CAUSE, BE RESPONSIVE, BE THE PART OF THE SOLUTION, BE BOLD."
              srcSet={`${img1_400} 400w, ${img1_600} 600w, ${img1_800} 800w, ${img1_1000} 1000w, ${img1_1400} 1400w, ${img1_1600} 1600w`}
              src={img1_1600}
              className="projectdetailimg boximghov"
              alt="CORE VALUES with icons"
            />

            <img
              aria-label="Woman wearing a dark gray T-shirt with core values icons with a mountain, light bulb, eye, and rocket, along with the text 'Priority Dispatch.'"
              srcSet={`${img2_400} 400w, ${img2_600} 600w, ${img2_800} 800w, ${img2_1000} 1000w, ${img2_1400} 1400w, ${img2_1600} 1600w`}
              src={img2_1600}
              className="projectdetailimg boximghov"
              alt="A woman in a charcoal t-shirt displaying the companies core value icons"
            />

            <img
              aria-label="Framed poster with a gradient blue background and a circular arrangement of white icons highlighting core values: Be Committed, Be The Solution, Be Bold, Be Responsive."
              srcSet={`${img3_400} 400w, ${img3_600} 600w, ${img3_800} 800w, ${img3_1000} 1000w, ${img3_1400} 1400w, ${img3_1600} 1600w`}
              src={img3_1600}
              className="projectdetailimg boximghov"
              alt="Framed poster with core value icons"
            />
          </div>
      </div>
    </div>
  );
}