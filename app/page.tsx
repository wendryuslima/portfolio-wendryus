import About from "./components/about";
import Header from "./components/header";
import Hero from "./components/hero";
import Services from "./components/services";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <Hero />
      <About />
      <Services />
    </div>
  );
};

export default Home;
