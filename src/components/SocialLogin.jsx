const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-semibold pb-5">Login With</h2>
      <div className="flex flex-col gap-2 w-full">
        <button className="border py-2">
          <i className="fa-brands fa-google"></i> Login with Google
        </button>
        <button className="border py-2">
          <i className="fa-brands fa-github"></i> Login with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
