import Link from 'next/link';

const Header = () => {
  return (
    <div>
      <nav>
        <ul className="text-slate-100">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
