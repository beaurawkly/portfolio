// src/projects/kinetictype.js
import React from 'react';
import '../styles/reset.css';
import '../styles/App.css';
import '../styles/narrow.css';

export default function KineticType() {
  return (
    <div className="maxcontainerwidth">
      <div className="project">
        <div className="projectdescription">
          <h1 id="projectTitle">Kinetic Type</h1>
          <p>Kinetic type is a dynamic typography style that incorporates movement and animation to create engaging visual experiences. This project explores the possibilities of animated text in digital media.</p>
          <p id="software">Software</p>
          <ul>
            <li>After Effects</li>
            <li>Premiere Pro</li>
          </ul>
            <p><a href="../" class="returnbutton">All Projects</a></p>
        </div>
        <div className="projectdetailimages">
             <div style={{ paddingBottom: '56.25%', position: 'relative', height: 0 }}><iframe
                  src="https://player.vimeo.com/video/23887663?h=09af12b221&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                  }}
                  title="La Mancha Kinetic Typography"
                />
            </div>
            <div style={{ paddingBottom: '56.25%', position: 'relative', height: 0 }}><iframe
                  src="https://player.vimeo.com/video/918528248?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                  }}
                  title="Aedh wishes for the Cloths of Heaven Kinetic Typography"
                />
            </div>
          </div>
      </div>
    </div>
  );
}