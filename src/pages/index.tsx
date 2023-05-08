import data from '@/consts/info';

export default function Home() {
  return (
    <div className="absolute m-0 top-1/2 -translate-y-1/2 justify-center text-center text-white">
      <h1 className="font-bold text-7xl pt-5 pb-14">{data.name}</h1>
      <h1 className="text-5xl pt-5 pb-14">{data.role}</h1>
    </div>
  );
}
