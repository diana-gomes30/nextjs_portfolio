import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/interfaces/data';

interface CardProjectProps {
  project: Project;
}

export default function CardProject({ project }: CardProjectProps) {
  return (
    <div className="flex flex-col w-full h-[550px] max-h-[900px] min-h-max text-white rounded-lg shadow-lg p-4 justify-center items-center">
      <div className="relative w-full flex flex-1">
        <Image
          src={project.imagePath}
          alt={project.name}
          placeholder="blur"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 200vw, 99vw"
          className="rounded-lg object-contain"
        />
      </div>
      <div className="h-auto">
        <h3 className="text-center text-2xl font-bold mt-4">{project.name}</h3>
        {project.tests ? (
          <h2 className="py-3 font-bold text-center">
            {project.skills}
            <br />
            {project.tests}
          </h2>
        ) : (
          <h3 className="py-3 font-bold text-center">{project.skills}</h3>
        )}
        <p className="mt-2 text-center">{project.description}</p>
        <div className="flex flex-col md:flex-row w-full content-between justify-between">
          <Link href={project.gitHubLink}>
            <button className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-bold py-2 my-2 px-4 rounded">
              GitHub Repo
            </button>
          </Link>
          <Link href={project.liveLink}>
            <button className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-bold py-2 my-2 px-4 rounded">
              Live Link
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
