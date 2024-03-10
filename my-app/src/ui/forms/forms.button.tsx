import { ReactNode } from "react";

type PropsType = {
  children: ReactNode;
};

const FormsButton = ({ children }: PropsType) => {
  return (
    <button className="h-[48px] w-full bg-[#FC4747] rounded-lg text-white text-[15px] active:bg-[#ffffff] active:text-[#161D2F]">
      {children}
    </button>
  );
};

export default FormsButton;
