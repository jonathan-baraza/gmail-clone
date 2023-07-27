const Register = () => {
  return (
    <div className="w-full min-h-[100vh] flex items-center justify-center">
      <div className="border border-gray-300 rounded-lg w-1/3 py-12 px-6 flex flex-col items-center">
        <img src="/google.svg" className="w-1/5" alt="google" />
        <div className="text-[28px] text-dark mt-2 ">Create your Account</div>
        <div className="text-lg text-dark mb-8">Enter your details</div>
        <div className="w-full float-label-container relative flex flex-col ">
          <input
            type="text"
            name="firstName"
            id="firstName"
            className="w-full bg-opacity-0 z-3 border border-gray-300 rounded p-[15px]  outline-[#1b66c8]"
          />
          <label
            className="float-label z-1 bg-red-300 ml-4 bg-white text-gray-600 px-2"
            htmlFor="firstName"
          >
            First Name
          </label>
        </div>
      </div>
    </div>
  );
};

export default Register;
