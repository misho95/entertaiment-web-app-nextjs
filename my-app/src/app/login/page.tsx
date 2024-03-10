import FormContainer from "@/ui/forms/form.container";
import LoginForm from "@/ui/forms/login-form";
import Container from "@/ui/shared/container";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col items-center gap-[83px]">
        <Link href={"/"}>
          <Image
            src="assets/logo.svg"
            width={32}
            height={25.6}
            alt="Logo"
            className="select-none"
          />
        </Link>
        <FormContainer>
          <LoginForm />
        </FormContainer>
      </div>
    </Container>
  );
}
