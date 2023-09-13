import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Review from "./components/Review";
import Skills from "./components/Skills";
import Works from "./components/Works";

function App() {
  return (
    <div >
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
