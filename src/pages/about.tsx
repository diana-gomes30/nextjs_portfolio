import data from '@/consts/info';

export default function About() {
  return (
    <div className="w-full h-full flex items-center">
      <div className="w-11/12 md:w-4/6 py-2 m-auto backdrop-blur-md drop-shadow-2xl bg-white/20 rounded-md">
        <h1 className="max-w-fit m-auto pt-5 text-3xl text-white border-b-2 border-b-fuchsia-700 font-serif font-semibold">
          About Me
        </h1>
        <div className="flex flex-col w-full py-10 px-10 text-white">
          <p className="font-serif font-semibold">{data.aboutme}</p>
          <div className="pt-8 flex md:grid md:gap-5 flex-col md:grid-cols-2 md:grid-rows-3 grid-flow-col md:grid-flow-row">
            <p className="pb-3 md:pb-0">
              <b>Name: </b>
              {data.name}
            </p>
            <p className="pb-3 md:pb-0">
              <b>Address: </b>
              {data.address}
            </p>
            <p className="pb-3 md:pb-0">
              <b>Email: </b>
              {data.email}
            </p>
            <p className="pb-3 md:pb-0">
              <b>Nationality: </b>
              {data.nationality}
            </p>
            <p className="pb-3 md:pb-0 md:col-span-2">
              <b>Programing Skills: </b>
              {data.skills}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
