import logo from './logo.svg';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <div style={{ marginTop: 'var(--nav-height)' }}>
        <Intro />
        <About />
        <Contact />
      </div>
    </>
  );
}

export default App;
