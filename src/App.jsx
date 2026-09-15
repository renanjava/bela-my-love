import ParticlesBg from './components/ParticlesBg';
import Timeline from './components/Timeline';
import Birthday from './components/Birthday';
import Family from './components/Family';
import SpotifySection from './components/SpotifySection';
import Gallery from './components/Gallery';
import PinterestCollection from './components/PinterestCollection';
import FutureTogether from './components/FutureTogether';
import Footer from './components/Footer';
import Hero from './components/Hero';

function App() {
  return (
    <div className="app-container">
      {/* Background Effect */}
      <ParticlesBg />

      {/* Main Content */}
      <main className="main-content">
        <Hero />
        <Timeline />
        <Birthday />
        {/*<Family />*/}
        <SpotifySection />
        {/*<Gallery />
        <PinterestCollection />*/}
        <FutureTogether />
      </main>

      <Footer />
    </div>
  );
}

export default App;
