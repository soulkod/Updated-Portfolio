
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavBar from './components/NavBar';
import Home from './components/Home';
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/footer";


function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="content">
        <Home />
        <Education />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
