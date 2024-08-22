import Logo from "../../assets/logo";
import LoginForm from "../components/loginForm";

const LandOnLogin = () => {
  return (
    <div className="w-ful h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center md:flex-row gap-4 md:gap-8 md:w-[64%]">
        <div className="flex-3">
          <div className="">
            <Logo className="w-auto h-28 -mx-7" />
          </div>
          <p className="text-2.75xl lg:text-2xl">
            Facebook helps you connect and share with the people in your life.
          </p>
        </div>
        <LoginForm className="flex-2" />
      </div>
      <div className="flex flex-row-reverse w-3/5 p-4 text-sm">
        <p className="w-2/5 text-center">
          <button className="font-bold">Create a Page</button> for a celebrity, brand or business.
        </p>
      </div>
    </div>
  );
};

export default LandOnLogin;
