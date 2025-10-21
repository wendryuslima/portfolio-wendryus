import About from "./components/about";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Projects from "./components/projects";
import Services from "./components/services";
import Skills from "./components/skills";
import Stats from "./components/stats";

const Home = () => {
  return (
    <div id="home" className="flex flex-col">
      <Header />
      <Hero />
      <About />
      <Services />
      <Skills />
      <Stats />
      <Projects />
      <Footer />
    </div>
  );
};

export default Home;
