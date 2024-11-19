import LoginForm from "@/components/logincomponent/LoginForm";
import AuthTemplate from "@/templates/AuthTemplate";
import Link from "next/link";

export default function Login() {
  return (
    <AuthTemplate>
      <div className="flex flex-col gap-6 relative items-center lg:items-stretch py-2 md:py-0">
        <h1 className="text-primary font-semibold capitalize text-2xl md:text-4xl">
          Member Login
        </h1>
        <LoginForm />
        <div className="self-center">
          <h2 className="text-primary tracking-wide text-sm md:text-base font-medium">
            Not a member yet?{" "}
            <Link className="text-[#3876ef] font-semibold" href="/auth/signup">
              Create new account
            </Link>
          </h2>
        </div>
      </div>
    </AuthTemplate>
  );
}
