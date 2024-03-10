import NavBar from "@/ui/home/nav.bar";
import Container from "@/ui/shared/container";
import Link from "next/link";

export default function Home() {
  return (
    <Container>
      <div className="w-full h-min-screen flex">
        <NavBar />
        <div className="p-[32px]">Tv-Series</div>
      </div>
    </Container>
  );
}
