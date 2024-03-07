import './App.css';
import AboutUs from './components/AboutUs';
import Activities from './components/Activities';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Testimonials from './components/Testimonials';
import UpcomingEvents from './components/UpcomingEvents';

function App() {
  return (
    <>
      < Navbar />
      < HeroSection />
      < AboutUs />
      < Activities />
      <UpcomingEvents />
      < Testimonials />
      <Footer />
    </>
  );
}

export default App;
