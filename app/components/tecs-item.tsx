import { ReactNode } from "react";

import "aos/dist/aos.css";

interface TecsItemProps {
  image: ReactNode;
  name: string;
  delay: number;
}

const TecsItem = ({ image, name, delay }: TecsItemProps) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      className="w-full h-[100px] bg-zinc-950 border-zinc-800 border hover:bg-zinc-800 transition-colors rounded-lg flex items-center justify-center gap-2 flex-col"
    >
      {image}
      <p>{name}</p>
    </div>
  );
};

export default TecsItem;
