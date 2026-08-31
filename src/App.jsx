import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./Navbar/Navbar";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Services from "./Services/Services";
import Projects from "./Projects/Projects";
import Experience from "./Experience/Experience";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Navbar />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
