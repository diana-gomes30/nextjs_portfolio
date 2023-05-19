import data from '@/consts/info';

export default function Home() {
  return (
    <>
      <div className="w-screen h-full flex">
        <div className="flex flex-col flex-1 justify-center items-center">
          <h1 className="font-bold text-5xl md:text-7xl text-center text-white pt-3 md:pt-5 pb-14">
            {data.name}
          </h1>
          <h1 className="text-4xl md:text-5xl text-center text-white pt-3 md:pt-5 pb-14">
            {data.role}
          </h1>
        </div>
      </div>
    </>
  );
}
