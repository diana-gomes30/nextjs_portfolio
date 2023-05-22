import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from 'next/link';
import data from '@/consts/info';

const Footer = () => {
  return (
    <div className="flex w-full items-center justify-center py-2 px-10">
      <div className="grid grid-cols-2 gap-4">
        <div className="p-3">
          <Link href={data.socialMedia.gitHub} aria-label="Github profile">
            <GitHubIcon className="text-slate-100 hover:cursor-pointer hover:text-fuchsia-500 hover:transition-all hover:ease-in delay-100 hover:scale-125" />
          </Link>
        </div>
        <div className="p-3">
          <Link href={data.socialMedia.linkedin} aria-label="Linkedin profile">
            <LinkedInIcon className="text-slate-100 hover:cursor-pointer hover:text-fuchsia-500 hover:transition-all hover:ease-in delay-100 hover:scale-125" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
