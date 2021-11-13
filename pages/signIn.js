import { useRouter } from "next/router";
import { useState } from "react";
import httpService from "../services/httpService";
function signIn() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginHandler = async (e) => {
    e.preventDefault();
    const res = await httpService.login(email, password);
    if (res.success && res.success === true) {
      localStorage.setItem("token", res.token);
      router.push("/");
    } else {
      alert("Bad credentials");
    }
  };
  return (
    <div className="">
      <div className="m-auto w-[52%] p-5 ">
        <div className="flex justify-center mb-5">
          <img
            src="./amax.png"
            className="h-[40px]  cursor-pointer"
            onClick={() => router.push("/")}
          />
        </div>
        <form className="border border-gray-300 py-4 px-6">
          <h1 className="text-3xl pb-4">Sign-In</h1>
          <label htmlFor="email" className="font-bold">
            Email
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            className="block border-2 border-gray-400 w-full"
          />
          <label htmlFor="email" className="font-bold">
            Password
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            className="block border-2 border-gray-400 w-full"
          />
          <button
            className="w-full mt-2 border-2 h-8 shadow-sm border-[#106de4] rounded-sm bg-[#106de4] hover:bg-[#0a50ac] mb-5 text-white"
            onClick={loginHandler}
          >
            Continue
          </button>
          <p className="text-sm">
            By continuing, you agree to Amax's Conditions of Use and Privacy
            Notice.
          </p>
          <p className="text-sm text-blue-700 mt-4">Need help?</p>
        </form>
        <p className="flex justify-center mt-5 text-gray-600">New to Amax?</p>
        <button className="w-full mt-2 bg-gray-200 border-2 border-gray-400 p-[2px] shadow-sm">
          Create your Amax acount
        </button>
      </div>
      <div className="h-screen bg-gray-50">
        <div className="m-auto w-[45%] p-5">
          <div className="flex justify-between text-[12px] text-blue-700">
            <p>Conditions of Use</p>
            <p>Privacy</p>
            <p>Notice Help</p>
          </div>
          <p className="text-sm mt-2 flex justify-center">
            © 1996-2021, Amazon.com, Inc. or its affiliates
          </p>
        </div>
      </div>
    </div>
  );
}

export default signIn;
