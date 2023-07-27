const Register = () => {
  return (
    <div className="w-full min-h-[100vh] flex items-center justify-center">
      <div className="border border-gray-300 rounded-lg w-1/3 py-12 px-6 flex flex-col items-center">
        <img src="/google.svg" className="w-1/5" alt="google" />
        <div className="text-[28px] text-dark mt-2 ">Create your Account</div>
        <div className="text-lg text-dark mb-8">Enter your details</div>
        {/* Name */}
        <div className="w-full float-label-container relative flex flex-col ">
          <input
            type="text"
            name="name"
            id="name"
            className="w-full bg-opacity-0 z-3 border border-gray-300 rounded p-[15px]  outline-[#1b66c8]"
          />
          <label
            className="float-label z-1 font-[500] ml-4 bg-white text-gray-600 px-2"
            htmlFor="name"
          >
            Name
          </label>
        </div>

        {/* Email */}
        <div className="w-full float-label-container relative flex flex-col mt-5">
          <input
            type="email"
            name="email"
            id="email"
            className="w-full bg-opacity-0 z-3 border border-gray-300 rounded p-[15px]  outline-[#1b66c8]"
          />
          <label
            className="float-label z-1 font-[500] ml-4 bg-white text-gray-600 px-2"
            htmlFor="email"
          >
            Email
          </label>
        </div>

        {/* Passsword */}
        <div className="w-full float-label-container relative flex flex-col mt-5">
          <input
            type="password"
            name="password"
            id="password"
            className="w-full bg-opacity-0 z-3 border border-gray-300 rounded p-[15px]  outline-[#1b66c8]"
          />
          <label
            className="float-label z-1 font-[500] ml-4 bg-white text-gray-600 px-2"
            htmlFor="password"
          >
            Password
          </label>
        </div>

        {/* Confirm Password */}
        <div className="w-full float-label-container relative flex flex-col mt-5">
          <input
            type="password"
            name="password2"
            id="password2"
            className="w-full bg-opacity-0 z-3 border border-gray-300 rounded p-[15px]  outline-[#1b66c8]"
          />
          <label
            className="float-label z-1 font-[500] ml-4 bg-white text-gray-600 px-2"
            htmlFor="password2"
          >
            Confirm password
          </label>
        </div>
      </div>
    </div>
  );
};

export default Register;
