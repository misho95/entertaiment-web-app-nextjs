import FormsButton from "@/ui/forms/forms.button";
import Link from "next/link";

const LoginForm = () => {
  return (
    <form className="w-[400px] h-[373px] p-10 flex flex-col gap-5">
      <h1 className="text-[32px] text-white mb-5">Login</h1>
      <input
        id="email"
        type="text"
        placeholder="Email address"
        className="h-[37px] text-white caret-[#FC4747] border-b-[1px] border-[#5A698F] w-full bg-transparent pb-[5px] focus:outline-none"
        required
      />
      <input
        id="password"
        type="password"
        placeholder="Password"
        className="h-[37px] text-white caret-[#FC4747] border-b-[1px] border-[#5A698F] w-full bg-transparent pb-[5px] focus:outline-none"
        required
      />
      <FormsButton>Login to your account</FormsButton>
      <div className="text-white text-center">
        Don’t have an account?{" "}
        <Link className="text-[#FC4747]" href={"/signup"}>
          Sign Up
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
