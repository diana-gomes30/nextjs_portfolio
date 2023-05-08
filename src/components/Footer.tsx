import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from 'next/link';
import data from '@/consts/info';

const Footer = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="p-3">
        <Link href={data.socialMedia.gitHub}>
          <GitHubIcon className="text-slate-100 hover:cursor-pointer hover:text-fuchsia-700 hover:transition-all hover:ease-in delay-100 hover:scale-125" />
        </Link>
      </div>
      <div className="p-3">
        <Link href={data.socialMedia.linkedin}>
          <LinkedInIcon className="text-slate-100 hover:cursor-pointer hover:text-fuchsia-700 hover:transition-all hover:ease-in delay-100 hover:scale-125" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
