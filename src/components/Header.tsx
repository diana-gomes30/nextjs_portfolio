import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [page, setPage] = useState(0);

  const handleClick = (value: number) => {
    setPage(value);
  };

  return (
    <div className="flex w-full items-center justify-center py-6 px-10">
      <nav>
        <ul className="flex text-base">
          <li
            onClick={() => handleClick(0)}
            className={`${
              page === 0 ? `text-fuchsia-700 ` : `text-white `
            } && flex-1 mx-6 cursor-pointer font-bold hover:text-fuchsia-700 hover:transition-all hover:ease-in-out delay-100`}
          >
            <Link href="/">HOME</Link>
          </li>
          <li
            onClick={() => handleClick(1)}
            className={`${
              page === 1 ? `text-fuchsia-700 ` : `text-white `
            } && flex-1 mx-6 cursor-pointer font-bold hover:text-fuchsia-700 hover:transition-all hover:ease-in-out delay-100`}
          >
            <Link href="/about">ABOUT</Link>
          </li>
          <li
            onClick={() => handleClick(2)}
            className={`${
              page === 2 ? `text-fuchsia-700 ` : `text-white `
            } && flex-1 mx-6 cursor-pointer font-bold hover:text-fuchsia-700 hover:transition-all hover:ease-in-out delay-100`}
          >
            <Link href="/projects">PROJECTS</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
