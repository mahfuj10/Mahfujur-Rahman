import 'bootstrap/dist/css/bootstrap.min.css';
import background2 from '../src/images/backgorund2.png';
import Header from './components/Header/Header';
import Nav from '../src/components/Header/Nav';
import AboutMe from './components/AboutMe/AboutMe';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';


function App() {

  return (

    <>

      <Header />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </>

  );
}

export default App;
