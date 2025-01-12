import './App.css';
import Footer from './components/footer';
import Body from './components/homebody';
import FontLoader from './components/loader';
import Navbar from './components/navbar';
import Projects from './components/projects';
import Sidebars from './components/sidebars';
import Cpage from './components/cpage';
// import Animate from "./components/animate";
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
        <FontLoader>
          <Navbar title="RANVIR" />
          {/* <Animate /> */}
          <Sidebars />
          <Footer />
          <Routes>
            <Route exact path="/" element={<Body class="project" btn="btn" appear="dis" title="Home" />} />
            <Route exact path="/projects" element={<Projects class="project" btn="btnd" appear="impProject fadeUp" title="projects" />} />
            <Route exact path="/contact" element={<Cpage title="contact" />} />
          </Routes>
        </FontLoader>
      </Router>
    </>
  );
}

export default App;
