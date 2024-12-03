"use client";

import Aos from "aos";
import "aos/dist/aos.css";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      data-aos="fade-up"
      className="space-y-4 flex w-full justify-center items-center flex-col h-[100vh]"
    >
      <div className="space-y-2 text-center ">
        <h1 className="text-3xl  font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
          Conheça meu portfólio
        </h1>
        <p className="max-w-[600px] mx-auto text-zinc-500 md:text-xl">
          Sou um desenvolvedor Fron-End, com uma paixão em construir boas
          interfaces.
        </p>
        <div className="flex justify-center  text-zinc-500 items-center gap-2 mt-4">
          <Link target="_blank" href="https://github.com/wendryuslima">
            <Github
              className="hover:text-foreground transition-colors"
              size={18}
            />
          </Link>

          <Link
            target="_blank"
            href="https://www.linkedin.com/in/wendryus-lima-silva-477065218/"
          >
            <Linkedin
              className="hover:text-foreground transition-colors"
              size={18}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
