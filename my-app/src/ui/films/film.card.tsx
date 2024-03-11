import Image from "next/image";
import BookMarkButton from "../bookmark.button";
import Link from "next/link";

const FilmCard = ({ data }) => {
  return (
    <div className="w-[calc(50%-20px)] sm:w-[calc(33%-20px)] md:w-[calc(25%-20px)] lg:w-[calc(20%-20px)] flex items-center justify-center">
      <div className="w-[280px] h-[226px]  relative select-none">
        <BookMarkButton />
        <Link className="flex flex-col gap-2" href={"/"}>
          <Image
            src={data.thumbnails.large}
            width={280}
            height={174}
            alt={data.title}
            className="select-none rounded-xl"
          />
          <div className="text-white/75 flex items-center gap-1 text-sm">
            <span>{data.year}</span>
            <div className="w-[3px] h-[3px] bg-[#FFFFFF]/50 rounded-full " />
            <span className="uppercase">{data.type}</span>
            <div className="w-[3px] h-[3px] bg-[#FFFFFF]/50 rounded-full " />
            <span>{data.age}</span>
          </div>
          <h4 className="text-white text-[18px]">{data.title}</h4>
        </Link>
      </div>
    </div>
  );
};

export default FilmCard;
