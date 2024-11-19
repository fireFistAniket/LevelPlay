import SignUpForm from "@/components/signupcomponent/SignupForm";
import AuthTemplate from "@/templates/AuthTemplate";
import Link from "next/link";

export default function SignUp() {
  return (
    <AuthTemplate>
      <div className="flex flex-col gap-6 relative items-center lg:items-stretch py-2 md:py-0">
        <h1 className="text-primary font-semibold capitalize text-2xl md:text-4xl">
        Member Signup
        </h1>
        <SignUpForm />
        <div className="self-center">
          <h2 className="text-primary tracking-wide text-sm md:text-base font-medium">
            Already member?{" "}
            <Link className="text-[#3876ef] font-semibold" href="/auth/login">
              Login now!
            </Link>
          </h2>
        </div>
      </div>
    </AuthTemplate>
  );
}
