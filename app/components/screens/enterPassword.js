"use client";
export default function PasswordScreen() {
  return (
    <div className="text-center text-white w-full max-w-md mx-auto p-4 flex-col justify-between">
      <div className="w-full max-w-md ">
        <div className="flex items-center mb-6">
          <i className="fas fa-arrow-left text-white text-xl"></i>
          <h1 className="flex-grow text-center text-xl font-semibold">
            Password
          </h1>
        </div>
        <h2 className="text-2xl font-semibold mb-2">Enter your password</h2>
        <p className="text-gray-400 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, ut aliquam,
          purus sit
        </p>
        <div className="text-left mb-6">
          <label className="block text-gray-400 mb-2">Password</label>
          <div className="relative">
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none"
            />
            <i className="fas fa-eye absolute right-3 top-3 text-gray-400"></i>
          </div>
        </div>
      </div>
      <button className="w-full py-3 bg-lime-500 text-black rounded-full text-lg font-semibold">
        Continue
      </button>
    </div>
  );
}
