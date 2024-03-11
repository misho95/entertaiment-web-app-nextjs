import FilmContainer from "@/ui/films/film.container";
import Search from "@/ui/home/search";
import TrendingScroll from "@/ui/trending/trending.scroll";

export default function Home() {
  return (
    <div className="pt-[32px] flex flex-col gap-5 w-full n">
      <Search />
      <TrendingScroll />
      <FilmContainer />
    </div>
  );
}
