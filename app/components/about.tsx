"use client";

const About = () => {
  return (
    <section id="about">
      <div
        data-aos="fade-up"
        className="flex p-6  items-center justify-center  flex-col-reverse md:flex-row gap-4"
      >
        <div className="gap-3 max-w-[900px]">
          <h2 className="mb-3 items-center text-center">Sobre mim</h2>
          <p
            data-aos="fade-left"
            className="max-w-[900px] text-center text-zinc-500 md:text-xl "
          >
            Sou Wendryus Lima, um desenvolvedor com paixão por transformar
            ideias em interfaces digitais dinâmicas e impactantes. Estou sempre
            em busca de aprender e evoluir, com o objetivo de levar meu trabalho
            a um novo patamar e fazer parte de projetos inspiradores.
            <br /> <br /> Me atualizo constantemente para expandir meu conjunto
            de habilidades e elevar a qualidade do meu trabalho como
            desenvolvedor .
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
