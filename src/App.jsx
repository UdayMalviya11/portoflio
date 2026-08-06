import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 md:px-10">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Footer />
      </main>
    </>
  );
}
