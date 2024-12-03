"use client";

import Image, { StaticImageData } from "next/image";
import { ReactNode, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { Button } from "./ui/button";

interface ServiceCardProps {
  title: string;
  image: StaticImageData;
  description: ReactNode;
  reverse: boolean;
}
const ServiceCard = ({
  title,
  image,
  description,
  reverse,
}: ServiceCardProps) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className={`flex items-center gap-8 flex-col-reverse ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } w-full justify-center mt-20 `}
    >
      <div data-aos="fade-right" className="w-full max-w-[450px] space-y-8">
        <div className="space-y-3">
          <h2>{title}</h2>
          {description}
        </div>

        <div className="flex items-center gap-2">
          <Link href="" target="_blank">
            <Button variant="outline">Criar projeto</Button>
          </Link>

          <a href="#skills">
            <Button variant="outline">Ver tecnolgias</Button>
          </a>
        </div>
      </div>

      <div
        data-aos="fade-right"
        className=" overflow-hidden flex items-center justify-center lg:justify-end "
      >
        <Image
          alt=""
          src={image}
          className=" h-auto  w-full max-w-[450px] rounded-lg  "
          priority
          sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw,33vw "
        />
      </div>
    </div>
  );
};

export default ServiceCard;
