import { Data } from "@/lib/data";
import FilmCard from "./film.card";

const FilmContainer = () => {
  const FilmsData = Data.films;

  return (
    <div className="w-full flex flex-col gap-5">
      <h2 className="text-[32px] text-white">Recommended for you</h2>
      <div className="w-full flex flex-wrap gap-5">
        {FilmsData.map((data) => {
          return <FilmCard key={data.id} data={data} />;
        })}
      </div>
    </div>
  );
};

export default FilmContainer;
