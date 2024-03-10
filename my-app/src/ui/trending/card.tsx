"use client";

import Image from "next/image";
import BookMarkButton from "./bookmark.button";
import { useRouter } from "next/navigation";

type PropsType = {
  data: any;
  pending: boolean;
};

const Card = ({ data, pending }: PropsType) => {
  const router = useRouter();

  const handleLink = () => {
    if (!pending) {
      router.push("/movies");
    }
  };

  return (
    <div
      onClick={handleLink}
      className="w-[470px] h-[230px] rounded-xl overflow-hidden relative flex items-end cursor-pointer"
    >
      <div className="bg-transparent w-full h-full absolute z-50 select-none" />
      <Image
        src={data.thumbnails.large}
        width={470}
        height={230}
        alt={data.title}
        className="select-none absolute"
      />
      <BookMarkButton />
      <div className="relative z-30 py-2 px-6 flex flex-col gap-3">
        <div className="flex items-center gap-3 text-[#FFFFFF]/75 text-[15px]">
          {data.year}
          <div className="w-[3px] h-[3px] bg-[#FFFFFF]/50 rounded-full " />
          <span className="uppercase">{data.type}</span>
          <div className="w-[3px] h-[3px] bg-[#FFFFFF]/50 rounded-full" />
          {data.age}
        </div>
        <h3 className="text-white text-[24px]">{data.title}</h3>
      </div>
    </div>
  );
};

export default Card;
