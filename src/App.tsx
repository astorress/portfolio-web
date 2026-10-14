import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Featured from "./components/Featured";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Marquee from "./components/Marquee";

// En React la página es un árbol de componentes: cada <Componente /> es una función que devuelve HTML (JSX).
export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Featured />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
