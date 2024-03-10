import { ReactNode } from "react";

type PropsType = {
  children: ReactNode;
};

const FormContainer = ({ children }: PropsType) => {
  return <div className="bg-[#161D2F] rounded-2xl">{children}</div>;
};

export default FormContainer;
