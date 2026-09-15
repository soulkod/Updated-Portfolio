
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavBar from './components/NavBar';
import Home from './components/Home';
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Education from "./components/Education";

function App() {
  const name = 'Thato Makoela';
  return (
    <div className="App">
      <NavBar />

      <div className="content">
        <Home/>
        <Education/>
        <Experience/>
        <Projects/>
        
        <Contact/>
        <footer/>
      </div>
    </div>
  );
}

export default App;
