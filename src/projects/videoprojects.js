// src/projects/videoprojects.js
import React from 'react';
import '../styles/reset.css';
import '../styles/App.css';
import '../styles/narrow.css';


export default function VideoProjects() {
  return (
    <div className="maxcontainerwidth">
      <div className="project">
        <div className="projectdescription">
          <h1 id="projectTitle">Video Projects</h1>
          <p>The video project that I worked on had lot of parts. I did the audio, lighting, art direction, editing, and post production.</p>
          
          <p id="software">Software</p>
          <ul>
            <li>Illustrator</li>
            <li>Premiere Pro</li>
            <li>After Effects</li>
            <li>Audition</li>
          </ul>
            <p><a href="../" class="returnbutton">All Projects</a></p>
        </div>
        <div className="projectdetailimages">
            {/* <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/927711208?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Cincinnati Customer Story" data-ready="true"></iframe></div> */}
            <div style={{ paddingBottom: '56.25%', position: 'relative', height: 0 }}>
                <iframe
                  src="https://player.vimeo.com/video/927711208?badge=0&autopause=0&player_id=0&app_id=58479"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                  }}
                  title="Cincinnati Customer Story"
                />
                {/* https://vimeo.com/1053173889?fl=pl&fe=sh */}
                {/* <iframe
                  src="https://player.vimeo.com/video/1053173889?badge=0&autopause=0&player_id=0&app_id=58479"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                  }}
                  title="Remsa Customer Story"
                /> */}
              </div>
          </div>
      </div>
    </div>
  );
}