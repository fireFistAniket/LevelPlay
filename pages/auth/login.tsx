import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AuthTemplate from "@/templates/AuthTemplate";

export default function Login() {
  return (
    <AuthTemplate>
      <div className="flex flex-col gap-6">
        <h1 className="text-primary font-semibold capitalize text-4xl">
          Member Login
        </h1>
        <div className="flex flex-col gap-5">
          <Label
            htmlFor="email"
            className="text-primary font-semibold text-base"
          >
            Email Address/Phone No.
          </Label>
          <Input
            type="email"
            id="email"
            placeholder="Enter your email address/phone no."
            className="rounded-lg p-5 border border-[#e1dede] outline-none"
          />
        </div>
        <div className="flex flex-col gap-5">
          <Label
            htmlFor="password"
            className="text-primary font-semibold text-base"
          >
            Password
          </Label>
          <Input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="rounded-lg p-5 border border-[#e1dede] outline-none"
          />
        </div>
      </div>
    </AuthTemplate>
  );
}
