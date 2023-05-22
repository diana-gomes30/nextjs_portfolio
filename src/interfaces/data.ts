import { StaticImageData } from 'next/image';

export interface Project {
  id: number;
  imagePath: StaticImageData;
  name: string;
  skills: string;
  tests?: string;
  description: string;
  gitHubLink: string;
  liveLink: string;
}
