import { ReactNode } from "react";

type PropsType = {
  children: ReactNode;
};

const Container = ({ children }: PropsType) => {
  return (
    <main className="bg-[#10141E] w-full min-h-screen flex justify-center items-center">
      {children}
    </main>
  );
};

export default Container;
