"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { techs } from "../_utils/tecs";
import TecsItem from "./tecs-item";
import Image from "next/image";

const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section id="skills">
      <div className="flex items-start justify-center lg:justify-between flex-col lg:flex-row gap-8">
        <div data-aos="fade-right" className="max-x-[350px]">
          <h3 className="text-2xl font-bold">Minhas tecnologias</h3>
          <p className="text-zinc-500">
            Essas são as ferramentas mais utilizadas por mim.
          </p>
        </div>

        <div className="grid grid-cols-3 lg:grid-cols-4 gap-2 w-full">
          {techs.map((tech) => (
            <TecsItem
              name={tech.name}
              key={tech.id}
              delay={tech.delay}
              image={
                tech.type === "image" ? (
                  <Image
                    className="w-[50px] h-[50px] "
                    src={tech.image}
                    alt={tech.name}
                    width={tech.width}
                    height={tech.height}
                  />
                ) : (
                  tech.image
                )
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
