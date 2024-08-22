import { useState } from "react";
import masked from '../../assets/masked.png';
import unMasked from '../../assets/unmasked.png'

interface LoginFormProps {
  className?: string
}
const LoginForm = ({className = ""}:LoginFormProps) => {
  const [isMasked, setIsMasked] = useState(true);
  const togglePasswordVisibility = () => {
    setIsMasked(!isMasked)
  }
  return (
    <div className={`px-4 drop-shadow-md rounded-md bg-white min-w-96 ${className}`}>
      <div className="flex flex-col pt-4 gap-4">
        <div className="flex flex-col gap-3">
            <input
              className="w-full px-4 py-[14px] border-[0.8px] rounded-md border-[#dddfe2] focus-visible:outline-none focus:border-primary focus:shadow-default focus:caret-primary"
              type="text"
              name="username"
              id=""
              placeholder="Email address or phone number"
            />
          <div className="relative flex items-center">
            <input
              className="w-full px-4 py-[14px] border-[0.8px] rounded-md border-[#dddfe2] focus-visible:outline-none focus:border-primary focus:shadow-default focus:caret-primary"
              type={isMasked ? "password" : "text"}
              name="password"
              id=""
              placeholder="Password"
            />
            <img src={isMasked ? masked : unMasked} alt="show/hide password" className="absolute right-4 " onClick={togglePasswordVisibility} />
          </div>
        </div>
        <button
          type="submit"
          className="leading-[48px] bg-primary hover:bg-blue-600 text-white font-semibold text-xl text-center rounded-lg px-4"
        >
          Log in
        </button>
        <a
          href="https://www.facebook.com/recover/initiate"
          className="text-primary mx-auto text-sm font-thin"
        >
          Forgotten password?
        </a>
      </div>
      <hr className="my-5" />
      <div className="pb-4 pt-1 flex flex-col">
        <button className="bg-secondary hover:bg-gradient-to-t hover:to-secondary hover:from-gray-500 text-white font-bold text-center leading-[48px] w-fit mx-auto rounded-lg px-4">
          Create new account
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
