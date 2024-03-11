import Link from "next/link";
import Image from "next/image";

const NavBarTablet = () => {
  return (
    <div className="w-full p-[32px]">
      <nav className="bg-[#161D2F] hidden sm:flex lg:hidden W-full h-[72px] rounded-lg justify-between items-center px-[35px]">
        <Link href={"/"}>
          <Image
            src="/assets/logo.svg"
            width={32}
            height={25.6}
            alt="Logo"
            className="select-none"
          />
        </Link>
        <div className="flex gap-8">
          <Link href={"/"}>
            <Image
              src="/assets/icon-nav-home.svg"
              width={20}
              height={20}
              alt="Home Icon"
              className="select-none "
            />
          </Link>
          <Link href={"/movies"}>
            <Image
              src="/assets/icon-nav-movies.svg"
              width={20}
              height={20}
              alt="Movies Icon"
              className="select-none"
            />
          </Link>
          <Link href={"/tv-series"}>
            <Image
              src="/assets/icon-nav-tv-series.svg"
              width={20}
              height={20}
              alt="Tv Icon"
              className="select-none"
            />
          </Link>
          <Link href={"/bookmarked"}>
            <Image
              src="/assets/icon-nav-bookmark.svg"
              width={20}
              height={20}
              alt="Bookmark Icon"
              className="select-none"
            />
          </Link>
        </div>
        <Image
          src="/assets/image-avatar.png"
          width={40}
          height={40}
          alt="Avatar"
          className="select-none border-[1px] border-white rounded-full"
        />
      </nav>
    </div>
  );
};

export default NavBarTablet;
