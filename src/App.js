import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Resume from "./components/Resume";
import Work from "./components/Work";

function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <Work/>
      <Resume/>
      <Contact/>
    </div>
  );
}

export default App;
