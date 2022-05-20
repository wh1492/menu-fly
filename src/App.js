// import logo from './assets/images/logo.svg';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import './App.scss';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Hero />
        <About />
        {/* <Hero /> */}
      </Router>
    </>
  );
}

export default App;
