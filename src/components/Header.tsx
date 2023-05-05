import Link from 'next/link';
import { MouseEvent, useState } from 'react';

const Header = () => {
  const [page, setPage] = useState(0);

  const handleClick = (value: number) => {
    setPage(value);
  };

  return (
    <div>
      <nav>
        <ul className="flex text-base">
          <li
            onClick={() => handleClick(0)}
            className={`${
              page === 0 ? `text-fuchsia-800 ` : `text-white `
            } && flex-1 mx-8 cursor-pointer hover:text-fuchsia-800 font-bold`}
          >
            <Link href="/">HOME</Link>
          </li>
          <li
            onClick={() => handleClick(1)}
            className={`${
              page === 1 ? `text-fuchsia-800 ` : `text-white `
            } && flex-1 mx-8 cursor-pointer hover:text-fuchsia-800 font-bold`}
          >
            <Link href="/about">ABOUT</Link>
          </li>
          <li
            onClick={() => handleClick(2)}
            className={`${
              page === 2 ? `text-fuchsia-800 ` : `text-white `
            } && flex-1 mx-8 cursor-pointer hover:text-fuchsia-800 font-bold`}
          >
            <Link href="/projects">PROJECTS</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
