import './App.css';
import { LandingPage, AboutIllumina, AboutIEI, Speakers, Timeline, Prizes, Sponsors, ContactUs, Navbar } from "./components"
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
// function App() {
//   return (
//     <div className='AllComponenets'>
//     <LandingPage />
//     <AboutIllumina />
//     <AboutIEI />
//     <Speakers />
//     <Timeline />
//     <Prizes />
//     <Sponsors />
//     <ContactUs /> 
//      </div>
//   );
// }
// export default App;
function App() {
  return (
    <div className="App">
      <Parallax pages={9} style={{ top: '0', left: '0' }} class="animation">

        <Navbar></Navbar>

        <ParallaxLayer offset={0} speed={0.01}>
          <div class="animation_layer parallax" id="auroraB"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.2}>
          <div class="animation_layer parallax" id="front6"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.48}>
          <div class="animation_layer parallax" id="front5"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.40}>
          <div class="animation_layer parallax" id="front4"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.16}>
          <div class="animation_layer parallax" id="front3"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.4}>
          <div class="animation_layer parallax" id="front2"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.31}>
          <div class="animation_layer parallax" id="front1"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.36}>
          <div class="animation_layer parallax" id="treesF"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0}>
          <AboutIllumina />
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0}>
          <AboutIEI />
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={0}>
          <Speakers />
        </ParallaxLayer>

        <ParallaxLayer offset={4} speed={0}>
          <Timeline />
        </ParallaxLayer>

        <ParallaxLayer offset={5} speed={0}>
          <Prizes />
        </ParallaxLayer>

        <ParallaxLayer offset={6} speed={0}>
          <Sponsors />
        </ParallaxLayer>

        <ParallaxLayer offset={7} speed={0}>
          <ContactUs />
        </ParallaxLayer>

      </Parallax>
    </div>
  );
}

export default App;