import Link from "next/link";
import { Button } from "./ui/button";

const Header = () => {

  
  return (
    <div className="w-full bg-zinc-950 border-zinc-800 border-b z-10 fixed top-0 left-0">
      <div className="w-full max-w-[1200px]  mx-auto px-4 pb-4  py-3 flex items-center justify-between">
        <h1 className="font-semibold text-xl">Wendryus</h1>

        <div className=" md:flex hidden gap-4 md:none  text-zinc-400">
          <a className="header-link" href="#about">
            Sobre
          </a>
          <a className="header-link" href="#services">
            Serviços
          </a>
          <a className="header-link" href="#skills">
            Tecs
          </a>
          <a className="header-link" href="#projects">
            Projetos
          </a>
        </div>

        <Link
          target="_blank"
          href="https://wa.me//5511994419339?text=Tenho%20interesse%20em%20desenvolver%20um%20projeto"
        >
          <Button variant="outline">Entre em contato</Button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
