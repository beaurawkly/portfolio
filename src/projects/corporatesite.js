// src/projects/CorporateSite.js
import React from 'react';
import '../styles/reset.css';
import '../styles/App.css';
import '../styles/narrow.css';

// Import all image variants
import img1_400 from '../images/pdcsite-Home-400.webp';
import img1_600 from '../images/pdcsite-Home-600.webp';
import img1_800 from '../images/pdcsite-Home-800.webp';
import img1_1000 from '../images/pdcsite-Home-1000.webp';
import img1_1400 from '../images/pdcsite-Home-1400.webp';
import img1_1600 from '../images/pdcsite-Home-1600.webp';

import PDCvideo from '../images/PB-Falcon-reel.mp4';

export default function CorporateSite() {
  return (
    <div className="maxcontainerwidth">
      <div className="project">
        <div className="projectdescription">
          <h1 id="projectTitle">PDC Website</h1>
          <p>This was a complete redesign and brand standard update for Priority Dispatch. Priority Dispatch is a software company that makes software for emergency dispatchers. This site design has to be unique but align to the other sister companies. The company is a group of three company. The base is the non-profit organization that establishes the protocols or the triage logic. It also takes the nurse protocols from another company called Priority Solutions. Then Priority Dispatch puts that into a software that it sells. The branding for this site had to make Priority Dispatch a stand alone brand but also be part of the family of brands. The team we developed a brand system and design to achieve that.</p>
          <p id="software">Software</p>
          <ul><li>Figma</li><li>XD</li><li>Illustrator</li><li>Photoshop</li><li>Premiere Pro</li><li>After Effects</li></ul>
            <p><a href="../" class="returnbutton">All Projects</a></p>
        </div>
        <div className="projectdetailimages">
            <video width="890" autoplay="" muted="" loop="">
                <source src={PDCvideo} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            <img
              aria-label="Webpage of Priority Dispatch Corporation detailing their emergency dispatch systems and products with sections for scheduling demos, product information, customer testimonials, and contact details."
              srcSet={`${img1_400} 400w, ${img1_600} 600w, ${img1_800} 800w, ${img1_1000} 1000w, ${img1_1400} 1400w, ${img1_1600} 1600w`}
              src={img1_1600}
              className="projectdetailimg boximghov"
              alt="Priority Dispatch website"
            />

        </div>
      </div>
    </div>
  );
}