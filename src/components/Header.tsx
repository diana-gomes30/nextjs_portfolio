import Link from 'next/link';
import { ReactNode } from 'react';

const Header = () => {
  return (
    <div className="flex w-full items-center justify-center py-6 px-10">
      <nav>
        <ul className="flex text-base">
          <CustomLink href="/">Home</CustomLink>
          <CustomLink href="/about">About</CustomLink>
          <CustomLink href="/projects">Projects</CustomLink>
        </ul>
      </nav>
    </div>
  );
};

interface CustomLinkProps {
  href: string;
  children: ReactNode;
}

const CustomLink = ({ href, children }: CustomLinkProps) => {
  let path;
  if (typeof window !== 'undefined') {
    path = window.location.pathname;
  } else {
    path = '/';
  }

  return (
    <li>
      <Link
        href={href}
        className={`${
          path === href ? `text-fuchsia-700 ` : `text-white `
        } && flex-1 mx-6 cursor-pointer font-bold hover:text-fuchsia-700 hover:transition-all hover:ease-in-out delay-100`}
      >
        {children}
      </Link>
    </li>
  );
};

export default Header;
