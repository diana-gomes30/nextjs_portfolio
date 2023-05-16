import SliderProjects from '@/components/SliderProjects';

export default function Projects() {
  return (
    <div className="w-screen">
      <div className="flex flex-col w-4/6 py-2 px-10 m-auto backdrop-blur-md drop-shadow-2xl bg-white/20 rounded-md">
        <h1 className="max-w-fit m-auto pt-5 text-3xl text-white border-b-2 border-b-fuchsia-700 font-serif font-semibold">
          Projects
        </h1>
        <p className="pt-6 font-serif font-semibold text-white text-center">
          Next, I will show you some works I have done.
        </p>
        <div className="w-full py-5 items-center justify-center">
          <SliderProjects />
        </div>
      </div>
    </div>
  );
}
