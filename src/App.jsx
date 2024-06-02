import "./app.css";
import Navbar from "./components/navbar/Navbar";
import First from "./components/first/First";
import Second from "./components/second/Second";

const App = () => {
  return (
    <div>
      <section id="Home">
        <Navbar/>
        <First/>
      </section>
      <section id="About Me">
        <Second/>
      </section>
      <section id="Education">
        Education
      </section>
      <section id="Experience">
        Experience
      </section>
      <section id="Projects">
        Projects
      </section>
      <section id="Contact">
        Contact
      </section>
    </div>
  );
};

export default App;
