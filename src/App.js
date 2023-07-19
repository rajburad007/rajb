import "./App.css";
import Home from "../src/Components/Home.js";
import About from "../src/Components/About.js";
import BrandBand from "../src/Components/Brandband.js";
import Work from "../src/Components/Work.js";
import Testimonial from "../src/Components/Testimonials.js";
import Contact from "./Components/Contact.js";
import Loader from "./Components/Loader.js";
import Footer from "./Components/Footer.js";
import Navigator from "../src/Components/Navigation .js";

function App() {
  return (
    <>
      <Home />
      <About />

      <BrandBand />
      <Work />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
