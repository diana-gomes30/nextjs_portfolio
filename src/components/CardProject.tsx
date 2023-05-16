import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/interfaces/data';

interface CardProjectProps {
  project: Project;
}

export default function CardProject({ project }: CardProjectProps) {
  return (
    <div className="flex flex-col h-[550px] max-h-[900px] min-h-max bg-white rounded-lg shadow-lg p-4 justify-center items-center">
      <div className="relative w-full flex flex-1">
        <Image
          src={project.imagePath}
          alt={project.name}
          fill
          style={{ objectFit: 'cover' }}
          className="rounded-lg"
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
        <div className="flex flex-col md:flex-row w-full md:w-2/3 lg:w-1/3 my-4 mx-auto content-between justify-between">
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

/*
<div className="m-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Image
        className="rounded-t-lg"
        src={project.imagePath}
        alt={project.name}
        width={200}
        height={200}
      />
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {project.name}
      </h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {project.description}
      </p>
      <div className="flex content-between justify-between">
        <Link
          href={project.gitHubLink}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-fuchsia-700 rounded-lg hover:bg-fuchsia-800 focus:ring-4 focus:outline-none focus:ring-fuchsia-300 dark:bg-blue-600 dark:hover:bg-fuchsia-700 dark:focus:ring-fuchsia-800"
        >
          GitHub Repo
          <div className="pl-2">
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </Link>
        <Link
          href={project.liveLink}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-fuchsia-700 rounded-lg hover:bg-fuchsia-800 focus:ring-4 focus:outline-none focus:ring-fuchsia-300 dark:bg-fuchsia-600 dark:hover:bg-fuchsia-700 dark:focus:ring-fuchsia-800"
        >
          Live Link
          <div className="pl-2">
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </Link>
      </div>
    </div>
*/
