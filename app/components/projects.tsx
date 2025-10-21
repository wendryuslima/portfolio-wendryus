"use client";

import { projects } from "../_utils/projects";
import Card from "./card";

const Projects = () => {
  return (
    <section id="projects" className="space-y-6">
      <div
        className="justify-center gap-4 items-center flex flex-col"
        data-aos="fade-up"
      >
        <h2>Meus projetos</h2>
        <p className="text-zinc-500 text-xl max-w-[600px] text-center items-center">
          Conheça os meus principais projetos desenvolvidos durante a minha
          carreira.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} data-aos="fade-up">
            <Card project={project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
