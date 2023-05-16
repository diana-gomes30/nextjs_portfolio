import data from '@/consts/info';

export default function About() {
  return (
    <div className="w-4/6 py-2 m-auto backdrop-blur-md drop-shadow-2xl bg-white/20 rounded-md">
      <h1 className="max-w-fit m-auto pt-5 text-3xl text-white border-b-2 border-b-fuchsia-700 font-serif font-semibold">
        About Me
      </h1>
      <div className="flex flex-col w-full py-10 px-10 text-white">
        <p className="font-serif font-semibold">{data.aboutme}</p>
        <div className="pt-10 grid md:gap-5 grid-cols-1 md:grid-cols-2 grid-rows-5 md:grid-rows-3 grid-flow-col md:grid-flow-row">
          <p>
            <b>Name: </b>
            {data.name}
          </p>
          <p>
            <b>Address: </b>
            {data.address}
          </p>
          <p>
            <b>Email: </b>
            {data.email}
          </p>
          <p>
            <b>Nationality: </b>
            {data.nationality}
          </p>
          <div className="col-span-1 md:col-span-2">
            <p>
              <b>Programing Skills: </b>
              {data.skills}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
