import './App.css';
import { LandingPage, AboutIllumina, AboutIEI, Speakers, Timeline, Prizes, Sponsors, ContactUs } from "./components"

function App() {
  return (
    <div className='AllComponenets'>
    <LandingPage />
    <AboutIllumina />
    <AboutIEI />
    <Speakers />
    <Timeline />
    <Prizes />
    <Sponsors />
    <ContactUs />
    </div>
  );
}

export default App;