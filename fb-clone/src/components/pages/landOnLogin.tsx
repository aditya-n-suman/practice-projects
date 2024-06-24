// import Logo from "../../assets/logo.svg";
import LoginForm from "../components/loginForm";

const LandOnLogin = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-8">
      <div className="flex-1">
        {/* <Logo /> */}
        <p className="text-lg lg:text-2xl">
          Facebook helps you connect and share with the people in your life.
        </p>
      </div>
      <LoginForm />
    </div>
  );
};

export default LandOnLogin;
