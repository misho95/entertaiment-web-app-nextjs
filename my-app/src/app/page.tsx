import NavBar from "@/ui/home/nav.bar";
import Search from "@/ui/home/search";
import Container from "@/ui/shared/container";
import TrendingScroll from "@/ui/trending/trending.scroll";
import Link from "next/link";

export default function Home() {
  return (
    <Container>
      <div className="w-full h-min-screen flex">
        <NavBar />
        <div className="p-[32px] pr-0 flex flex-col gap-5 w-[calc(100%-160px)]">
          <Search />
          <TrendingScroll />
          <Link href={"/login"}>Login</Link>
        </div>
      </div>
    </Container>
  );
}
