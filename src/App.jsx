import ParticlesBg from './components/ParticlesBg';
import Hero from './components/Hero';
import LoveLetter from './components/LoveLetter';
import Timeline from './components/Timeline';
import Birthday from './components/Birthday';
import Family from './components/Family';
import SpotifySection from './components/SpotifySection';
import Gallery from './components/Gallery';
import PinterestCollection from './components/PinterestCollection';
import ThroneWishlist from './components/ThroneWishlist';
import FutureTogether from './components/FutureTogether';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      {/* Background Effect */}
      <ParticlesBg />

      {/* Main Content */}
      <main className="main-content">
        <Hero />
        <LoveLetter />
        <Timeline />
        <Birthday />
        <Family />
        <SpotifySection />
        <Gallery />
        <PinterestCollection />
        <FutureTogether />
      </main>

      <Footer />
    </div>
  );
}

export default App;
