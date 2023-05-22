import Link from 'next/link';
import { useRouter } from 'next/router';
import path from 'path';
import { ReactNode } from 'react';

const Header = () => {
  const router = useRouter();
  const currentPath = router.asPath;
  return (
    <div className="flex w-full items-center justify-center py-6 px-10">
      <nav>
        <ul className="flex text-base">
          <CustomLink href="/" path={currentPath}>
            Home
          </CustomLink>
          <CustomLink href="/about" path={currentPath}>
            About
          </CustomLink>
          <CustomLink href="/projects" path={currentPath}>
            Projects
          </CustomLink>
        </ul>
      </nav>
    </div>
  );
};

interface CustomLinkProps {
  href: string;
  children: ReactNode;
  path: string;
}

const CustomLink = ({ href, children, path }: CustomLinkProps) => {
  return (
    <li>
      <Link
        href={href}
        className={`${
          path === href ? 'text-white bg-fuchsia-500' : 'text-white'
        } flex-1 mx-6 cursor-pointer font-bold hover:text-white hover:bg-fuchsia-600 hover:transition-all hover:ease-in-out delay-100 p-2 rounded-md`}
      >
        {children}
      </Link>
    </li>
  );
};

export default Header;
