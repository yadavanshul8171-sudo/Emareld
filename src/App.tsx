import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Rooms from './components/Rooms';
import Amenities from './components/Amenities';
import Attractions from './components/Attractions';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-gold-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Rooms />
        <Amenities />
        <Attractions />
      </main>
      <Footer />
    </div>
  );
}

