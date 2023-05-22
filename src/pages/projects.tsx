import SliderProjects from '@/components/SliderProjects';
import Head from 'next/head';

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | Diana Gomes</title>
        <meta
          name="description"
          content="I'm Diana, a Software Developer. I like to learn about new technologies and I'm more interested in Frontend and Mobile. In my free time, I like to play games, listen to music and hang out with my friends."
        />
      </Head>
      <div className="w-screen">
        <div className="flex flex-col w-11/12 md:w-3/5 py-2 px-10 m-auto backdrop-blur-md drop-shadow-2xl bg-white/20 rounded-md">
          <h1 className="max-w-fit m-auto pt-5 text-3xl text-white border-b-2 border-b-fuchsia-500 font-serif font-semibold">
            Projects
          </h1>
          <p className="pt-6 font-serif font-semibold text-white text-center">
            Below, there are some projects that I have been doing.
          </p>
          <div className="w-full py-5 items-center justify-center">
            <SliderProjects />
          </div>
        </div>
      </div>
    </>
  );
}
