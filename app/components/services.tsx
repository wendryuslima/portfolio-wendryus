"use client";

import ServiceCard from "./service-card";
import Webdesign from "../../public/services/ilustration4.png";
import Programing from "../../public/services/ilustration1.png";
import UiUx from "../../public/services/ilustration3.png";

const Services = () => {
  return (
    <section id="services" className="space-y-6">
      <div data-aos="fade-up" className="space-y-4  mb-2  md:text-center">
        <h2 className="">Vamos construir sua ideia juntos</h2>
        <p className="description ">
          Vamos transformar ideias em realizações concretas, explorando cada
          detalhe com paixão e dedicação.
        </p>
      </div>

      <div className="space-y-8 w-full">
        <ServiceCard
          reverse={false}
          title="Web Design"
          description={
            <div className="text-zinc-500 space-y-2 text-base lg:text-[1.125rem] lg:leading-[1.625rem]">
              <p>
                {" "}
                Para o desenvolvimento de interfaces web, minha ferramenta de
                eleição é o Figma.
              </p>
              <p>
                {" "}
                O uso de wireframes é uma etapa crucial no meu processo de
                design. Através de esboços iniciais no Figma, visualizo a
                estrutura e o layout da interface.
              </p>
              <p>
                Para garantir consistência em todo o projeto, desenvolvo um
                style guide incluindo diretrizes para tipografia, paleta de
                cores, elementos de interface e muito mais.
              </p>
            </div>
          }
          image={Webdesign}
        ></ServiceCard>

        <ServiceCard
          reverse
          title="Desenvolvedor"
          description={
            <div className="text-zinc-500 space-y-2 text-base lg:text-[1.125rem] lg:leading-[1.625rem]">
              <p>
                Sou capaz de desenvolver aplicações web robustas e interativas.
                Mantendo um código limpo e modular que facilita a manutenção e a
                escalabilidade.
              </p>
              <p>
                Utilizo ferramentas poderosas para desenvolver funcionalidades
                de back-end em minhas aplicações web. Desde a autenticação de
                usuários até o armazenamento de dados em tempo real
              </p>
            </div>
          }
          image={Programing}
        ></ServiceCard>

        <ServiceCard
          reverse={false}
          title="UI/UX"
          description={
            <div className="text-zinc-500 space-y-2 text-base lg:text-[1.125rem] lg:leading-[1.625rem]">
              <p>
                Desde a fase de pesquisa inicial até a entrega final, coloco as
                necessidades e expectativas dos usuários no centro de todas as
                decisões de design, garantindo que cada interação seja
                intuitiva, eficiente e agradável.
              </p>
              <p>
                Crio designs responsivos que se adaptam a uma variedade de
                tamanhos de tela. Utilizo layout e grids flexíveis para garantir
                uma experiência consistente em todas as plataformas
              </p>
            </div>
          }
          image={UiUx}
        ></ServiceCard>

        <div
          data-aos="fade-right"
          className="flex flex-col mt-20 justify-center space-y-4"
        >
          <h2 className="text-center  text-4xl font-bold w-full ">
            SOLUÇÃO PARA SEU PROBLEMA
          </h2>
          <p className="text-center text-zinc-500 ">
            Meu intuito é sanar a sua dor! Se estiver precisando de algo para
            sua empresa,
          </p>
          <p className="text-center text-zinc-500 text-base lg:text-[1.125rem] lg:leading-[1.625rem]">
            seu negócio, ou até mesmo para seu uso pessoal, estou aqui para
            solucionar
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
