"use client";

const Stats = () => {
  const stats = [
    {
      number: "3+",
      label: "Anos de Experiência",
      description: "Desenvolvendo soluções digitais",
    },
    {
      number: "15+",
      label: "Projetos Concluídos",
      description: "Aplicações web e mobile",
    },

    {
      number: "20+",
      label: "Clientes Atendidos",
      description: "Satisfação e resultados garantidos",
    },
  ];

  return (
    <section id="stats" className="py-16">
      <div className="container mx-auto px-4">
        <div
          className="justify-center flex flex-col gap-4 items-center flex flex-col mb-12"
          data-aos="fade-up"
        >
          <h2 className="text-3xl text-center font-bold">Minha Jornada em Números</h2>
          <p className="text-zinc-500 text-xl max-w-[600px] text-center">
            Resultados que comprovam minha dedicação e resultado em projetos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center space-y-4 p-6 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-colors"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="text-4xl font-bold text-green-400">
                {stat.number}
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">{stat.label}</h3>
                <p className="text-sm text-zinc-400">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
