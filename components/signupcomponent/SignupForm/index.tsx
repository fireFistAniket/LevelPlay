import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
export default function SignUpForm() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const { setIsLoggedIn } = useContext(AuthContext) ?? {
    setIsLoggedIn: () => {},
  };

  const handelSignUp = () => {
    const data = JSON.stringify({ name, email, phone, password });
    localStorage.setItem("user", data);
    localStorage.setItem("isLoggedIn", "yes");
    setIsLoggedIn(true);
    router.push("/");
  };
  return (
    <div className="flex flex-col gap-3 md:gap-6 mx-4 md:mx-auto w-[80vw] md:w-auto">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <Label
            htmlFor="name"
            className="text-primary font-semibold text-sm md:text-base"
          >
            Name
          </Label>
          <Input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="rounded-lg p-3 md:p-5 border border-[#e1dede] outline-none"
          />
        </div>
        <div className="flex flex-col gap-3">
          <Label
            htmlFor="email"
            className="text-primary font-semibold text-sm md:text-base"
          >
            Email Address
          </Label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="rounded-lg p-3 md:p-5 border border-[#e1dede] outline-none"
          />
        </div>
        <div className="flex flex-col gap-3">
          <Label
            htmlFor="phone"
            className="text-primary font-semibold text-sm md:text-base"
          >
            Phone Number
          </Label>
          <Input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter your phone no."
            className="rounded-lg p-3 md:p-5 border border-[#e1dede] outline-none"
          />
        </div>
        <div className="flex flex-col gap-3">
          <Label
            htmlFor="password"
            className="text-primary font-semibold text-sm md:text-base"
          >
            Password
          </Label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="rounded-lg p-3 md:p-5 border border-[#e1dede] outline-none"
          />
        </div>
        <button
          type="button"
          onClick={handelSignUp}
          className="text-white tracking-wide font-semibold text-sm self-center md:self-stretch md:text-lg px-5 py-2 md:py-5 bg-[#3876ef] rounded-lg"
        >
          Sign Up
        </button>
      </div>
      <div className="flex gap-6 items-center">
        <span className="bg-primary/20 flex-1 h-0.5"></span>
        <span className="text-primary/70 tracking-wide text-xl font-medium">
          or
        </span>
        <span className="bg-primary/20 flex-1 h-0.5"></span>
      </div>
      <div className="flex gap-4">
        <button
          type="button"
          className="inline-flex items-center gap-4 border border-primary/15 bg-white/10 rounded-md p-3 lg:min-w-52 justify-center flex-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="23"
            fill="none"
          >
            <path
              fill="#FFC107"
              d="M20.488 9.704h-.738v-.038H11.5v3.667h5.18A5.498 5.498 0 0 1 6 11.5 5.5 5.5 0 0 1 11.5 6a5.47 5.47 0 0 1 3.649 1.393L17.742 4.8A9.125 9.125 0 0 0 11.5 2.333a9.167 9.167 0 1 0 8.988 7.371Z"
            />
            <path
              fill="#FF3D00"
              d="m3.39 7.233 3.012 2.209A5.498 5.498 0 0 1 11.5 6a5.47 5.47 0 0 1 3.649 1.393L17.742 4.8A9.125 9.125 0 0 0 11.5 2.333a9.161 9.161 0 0 0-8.11 4.9Z"
            />
            <path
              fill="#4CAF50"
              d="M11.5 20.667a9.12 9.12 0 0 0 6.146-2.38l-2.837-2.4A5.458 5.458 0 0 1 11.5 17a5.497 5.497 0 0 1-5.171-3.642l-2.99 2.303a9.157 9.157 0 0 0 8.161 5.006Z"
            />
            <path
              fill="#1976D2"
              d="M20.488 9.705h-.738v-.038H11.5v3.667h5.18a5.518 5.518 0 0 1-1.873 2.553h.002l2.837 2.4c-.201.182 3.02-2.203 3.02-6.787 0-.614-.063-1.214-.178-1.795Z"
            />
          </svg>
          <span className="text-sm md:text-base text-primary font-medium">
            Google
          </span>
        </button>
        <button
          type="button"
          className="inline-flex items-center gap-4 border border-primary/15 bg-white/10 rounded-md p-3 lg:min-w-52 justify-center flex-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="23"
            fill="none"
          >
            <path
              fill="#1E1E1E"
              d="M16.176 21.617c-1.198 1.161-2.505.978-3.764.428-1.332-.562-2.554-.587-3.96 0-1.76.758-2.688.538-3.74-.428C-1.25 15.47-.37 6.11 6.4 5.767c1.65.086 2.799.904 3.764.978 1.442-.294 2.823-1.137 4.363-1.027 1.845.147 3.238.88 4.155 2.2-3.813 2.285-2.909 7.308.587 8.713-.697 1.833-1.601 3.654-3.105 4.999l.013-.013ZM10.04 5.694C9.858 2.969 12.07.72 14.611.5c.355 3.153-2.86 5.5-4.57 5.194Z"
            />
          </svg>
          <span className="text-sm md:text-base text-primary font-medium">
            Apple
          </span>
        </button>
      </div>
    </div>
  );
}
