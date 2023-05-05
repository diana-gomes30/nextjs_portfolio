import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import Image from 'next/image';

interface LayoutProps {
  children: ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className="absolute inset-0">
        <Image src="/background.jpg" alt="background image" fill />
      </div>
      <div className="relative z-10">
        <div className="min-h-screen flex flex-col">
          <div className="w-screen mx-auto py-4 flex justify-center">
            <Header />
          </div>
          <div className="flex-grow">
            <main className="max-w-7xl mx-auto flex justify-center">
              {children}
            </main>
          </div>
          <div className="w-screen mx-auto py-4 flex justify-center">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
