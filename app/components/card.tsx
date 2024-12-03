import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Github, Globe } from "lucide-react";

interface ProjectProps {
  name: string;
  description: string;
  image: string;
  deploy: string;
  github: string;
}

interface CardProps {
  project: ProjectProps;
}

const Card = ({ project }: CardProps) => {
  return (
    <div className="border border-zinc-900 rounded-lg overflow-hidden w-full">
      <Image
        className="object-cover border-b border-zinc-900 max-h-[200px] w-full"
        src={project.image}
        alt=""
        width={300}
        height={200}
      />

      <div className="p-4 space-y-8">
        <div>
          <h3 className="text-lg font-semibold">{project.name}</h3>
          <p className="text-sm text-zinc-400">{project.description}</p>
        </div>

        <div className="space-y-2">
          <div>
            <Link target="_blank" href={project.deploy}>
              <Button
                className="w-full flex items-center gap-2"
                variant={"outline"}
              >
                Deploy
                <Globe size={18} />
              </Button>
            </Link>
          </div>

          <div>
            <Link target="_blank" href={project.github}>
              <Button
                className="w-full flex items-center gap-2"
                variant={"outline"}
              >
                GitHub
                <Github size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
