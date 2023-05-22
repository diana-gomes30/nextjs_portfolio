import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div
        className="h-screen w-screen overflow-x-hidden bg-cover bg-center flex flex-col items-center"
        style={{
          backgroundImage: 'url("/images/background.jpg")',
          backgroundSize: 'cover',
        }}
      >
        <Header />
        <div className="flex flex-1 my-10">
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    </>
  );
}
