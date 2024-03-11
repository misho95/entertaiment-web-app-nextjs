import Image from "next/image";

type PropsType = {
  checked?: boolean;
  handler?: (arg: any) => void;
};

const BookMarkButton = ({ handler, checked = false }: PropsType) => {
  if (checked) {
    return (
      <button
        onClick={handler}
        className="bg-[#10141E]/50 w-[32px] h-[32px] rounded-full absolute right-5 top-5 flex justify-center items-center z-50"
      >
        <Image
          src={"/assets/icon-bookmark-full.svg"}
          width={11.67}
          height={14}
          alt={"bookMark"}
          className="select-none absolute"
        />
      </button>
    );
  }

  if (!checked) {
    return (
      <button
        onClick={handler}
        className="bg-[#10141E]/50 w-[32px] h-[32px] rounded-full absolute right-5 top-5 flex justify-center items-center z-50"
      >
        <Image
          src={"/assets/icon-bookmark-empty.svg"}
          width={11.67}
          height={14}
          alt={"bookMark"}
          className="select-none absolute"
        />
      </button>
    );
  }
};

export default BookMarkButton;
