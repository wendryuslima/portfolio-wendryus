import About from "./components/about";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Projects from "./components/projects";
import Services from "./components/services";
import Skills from "./components/skills";

const Home = () => {
  return (
    <div id="home" className="flex flex-col">
      <Header />
      <Hero />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
};

export default Home;
