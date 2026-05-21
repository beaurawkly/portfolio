import logo from './logo.svg';
import videoImage from './images/video-image-01-400.jpg';
import printImage from './images/iaedplayingcards-image-01-400.jpg';

import podcastArtImage from './images/podcasts-image-01-400.jpg';
import motionCustomerStoryImage from './images/CustomerStory-image01-400.jpg';
import motionKineticTypeImage from './images/KineticType-image-01-400.jpg';
import fitnessImage from './images/1up2down-image-01-400.jpg';
import coreValueImage from './images/corevalues-image-01-400.jpg';
import playingCardsImage from './images/iaedplayingcards-image-01-400.jpg';
import journalSiteImage from './images/journalsite-image-01-400.jpg';
import iaedSiteImage from './images/iaedsite-image-01-400.jpg';
import environmentalImage from './images/navigator-image-01-400.jpg';
import corporateSitesImage from './images/pdcsite-image-01-400.jpg';

import './reset.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MenuBar from './components/MenuBar';
import Footer from './components/Footer';
import PlayingCards from './projects/playingcards';
import SmallBox from './components/smallBox';
<BrowserRouter>
  <Routes>
    <Route path="projects/playingcards" element={<PlayingCards />} />
  </Routes>
</BrowserRouter>

function App() {
  return (
    
    <div className="App">
      <MenuBar />
      <div className="maxcontainerwidth homelogocontainer">
        <img alt="reeding logo" className="homelogo" src={logo} width="200" />
      </div>
      <div className="maxcontainerwidth">
        <div className="featured">
          <div className="featurebox boxhover">
            <h2>Interface Design</h2>
            <a aria-label="View all User Interface projects." href="projects/ui/index.html">
              {/* <!-- <img className="featureimages" src="images/pdcsite-image-01.jpg" /> --> */}
              <video width="890" autoPlay muted loop className="boximghov">
                <source src="https://reeding.net/imgs/PB-Falcon-reel.mp4" />
                Your browser does not support the video tag.
              </video>
            </a>
          </div>
          <div className="featurebox boxhover">
            <h2>Video</h2>
            <a aria-label="View all video projects." href="projects/video/index.html">
              <img aria-label="Close-up of a camera screen showing a man in a suit being recorded with a blue backdrop." className="featureimages featureboximg boximghov" src={videoImage} />
            </a>
          </div>
          <div className="featurebox boxhover">
            <h2>Print</h2>
            <a aria-label="View all print projects." href="projects/print/index.html">
              <img aria-label="A purple 'IAED' box with two playing cards partially pulled out." className="featureimages featureboximg boximghov" src={printImage} />
            </a>
          </div>
        </div>
        <h1>Projects</h1>
        <div className="items">
          <SmallBox 
            title="Corporate Website"
            href="./projects/pdcsite/index.html"
            imageSrc={corporateSitesImage}
            altText="Image of the Priority Dispatch homepage showcasing sections for scheduling a demo, AQUA maintenance release news, and the ProQA emergency dispatch system."
            linkLabel="View the corporate website design project."
          />
          <SmallBox 
            title="Podcast Art"
            href="./projects/podcast/index.html"
            imageSrc={podcastArtImage}
            altText="Podcast cover art for four podcasts: 'COMING UP ACES,' 'Tell me exactly…,' 'DISPATCH IN DEPTH,' and 'REVIEW' by IAED."
            linkLabel="View the podcast design projects."
          />
          <SmallBox
            title="Motion - Customer Story"
            href="./projects/customer-story/index.html"
            imageSrc={motionCustomerStoryImage}
            altText="Woman speaking with cityscape in the background and two flags on either side."
            linkLabel="View the motion design project."
          />
          <SmallBox
            title="Motion - Kinetic Type"
            href="./projects/kinetictype/index.html"
            imageSrc={motionKineticTypeImage}
            altText="Screen shot from a kinetic type video with black text 'MISERY PAIN' on a white background."
            linkLabel="View kinetictype video projects."
          />
          <SmallBox
            title="Fitness Campaign"
            href="./projects/1up2down/index.html"
            imageSrc={fitnessImage}
            altText="Stylized graphic with the words 'ONE UP' and '2 DOWN' in varying font sizes, flanked by an upward and downward arrow, displayed against a textured gradient orange background."
            linkLabel="View a fitness campaign materials."
          />
          
          <SmallBox
            title="Core Values"
            href="./projects/corevalues/index.html"
            imageSrc={coreValueImage}
            altText="CORE VALUES with icons: rocket, eye, triangle, and light bulb. Below: BE COMMITTED TO THE CAUSE, BE RESPONSIVE, BE THE PART OF THE SOLUTION, BE BOLD."
            linkLabel="View the visual elements of a corporate core values project."
          />
          <SmallBox
            title="Playing Cards"
            href="/playingcards"
            imageSrc={playingCardsImage}
            altText="A purple 'IAED' box with two playing cards partially pulled out."
            linkLabel="View playing card designs."
          />
          <SmallBox
            title="Publication Website"
            href="./projects/journalsite/index.html"
            imageSrc={journalSiteImage}
            altText="Website screenshot of 'The Journal of Emergency Dispatch' featuring articles, quick links, and magazine covers."
            linkLabel="View a project of a news website."
          />
          
          <SmallBox
            title="Non-Profit Website"
            href="./projects/iaedsite/index.html"
            imageSrc={iaedSiteImage}
            altText="Screenshot of the International Academies of Emergency Dispatch (IAED) website homepage showing navigation options, an image of a female dispatcher, and a description of IAED's mission and protocols."
            linkLabel="View a web project from a Non-Profit company."
          />
          <SmallBox
            title="Environmental Design"
            href="./projects/environmental/index.html"
            imageSrc={environmentalImage}
            altText="Interior of a convention center hallway with large, colorful banners, arched windows with green frames, and patterned carpeting."
            linkLabel="View design from an environmental project."
          />
          <div className="box boxhover colbox empty"></div>
          <div className="box boxhover colbox empty"></div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
