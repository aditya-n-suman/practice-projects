const LoginForm = () => {
  return (
    <div className="px-4 drop-shadow-md rounded-md bg-white min-w-96">
      <div className="flex flex-col py-4 gap-4">
        <div className="">
          <input
            className="w-full mb-3"
            type="text"
            name="username"
            id=""
            placeholder="Email address or phone number"
          />
          <input
            className="w-full"
            type="password"
            name="password"
            id=""
            placeholder="Password"
          />
        </div>
        <button
          type="submit"
          className="leading-[48px] bg-blue-700 hover:bg-blue-600 text-white font-semibold text-center w-1/2 px-4"
        >
          Log in
        </button>
        <a
          href="https://www.facebook.com/recover/initiate"
          className="text-blue-700 mx-auto"
        >
          Forgotten password?
        </a>
      </div>
      <hr className="my-5" />
      <div className="mx-auto">
        <button className="bg-green-700 hover:bg-gradient-to-t hover:to-green-600 hover:from-gray-500 text-white mx-auto text-center leading-[48px] w-1/2 px-4">
          Create new account
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
