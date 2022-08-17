import './App.css';
import Footer from './components/footer';
import Body from './components/homebody';
import Navbar from './components/navbar';
import Projects from './components/projects';
import Sidebars from './components/sidebars';
// import { HashRouter } from "react-router-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar title="RANVIR" />
        <Sidebars />
        <Footer />
        <Routes>
          <Route exact path="/" element={<Body class="project" btn="btn" appear="dis" title="Home" />} />
          <Route exact path="/resume" element={"./components/Resume.pdf"} />
          <Route exact path="/projects" element={<Projects class="project" btn="btnd" appear="pNo fadeUp" title="projects" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
