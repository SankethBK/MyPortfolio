import logo from './logo.svg';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <div style={{ marginTop: '50px' }}>
        <Intro />
      </div>
    </>
  );
}

export default App;
