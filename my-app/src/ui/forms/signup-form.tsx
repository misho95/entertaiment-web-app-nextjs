import FormsButton from "@/ui/forms/forms.button";
import Link from "next/link";

const SignUpForm = () => {
  return (
    <form className="w-[400px] h-[418px] p-10 flex flex-col gap-5">
      <h1 className="text-[32px] text-white mb-5">Sign Up</h1>
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
      <input
        id="repassword"
        type="password"
        placeholder="Repeat password"
        className="h-[37px] text-white caret-[#FC4747] border-b-[1px] border-[#5A698F] w-full bg-transparent pb-[5px] focus:outline-none"
        required
      />
      <FormsButton>Create an account</FormsButton>
      <div className="text-white text-center">
        Already have an account?{" "}
        <Link className="text-[#FC4747]" href={"/login"}>
          Login
        </Link>
      </div>
    </form>
  );
};

export default SignUpForm;
