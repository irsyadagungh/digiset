"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { UserController } from "@/controllers/User.controller";

export default function Login() {
  const user = new UserController();

  const [isLogin, setIsLogin] = useState(true);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleIsLogin = () => {
    setIsLogin(!isLogin);
  };

  function signUp() {
    user.signup(email, password, userName);
    setIsLogin(true);
  }
  function login() {
    try{
    const userCredential =  user.signin(email, password);
    router.push("/home");
    } catch (error) {
      console.error("Login failed:", error);
    }
  }

  return (
    <div
      className={`relative w-screen h-full font-[family-name:var(--font-cabin)] overflow-hidden`}
    >
      <motion.div
        animate={{ y: isLogin ? 0 : "100vh" }}
        className={`w-[700px] h-[700px] bg-purple absolute -left-72 -top-72 rounded-full`}
      />
      <motion.div
        animate={{ y: isLogin ? 0 : "-100vh" }}
        className={`w-[700px] h-[700px] bg-blue absolute -right-72 -bottom-96  rounded-full`}
      />

      <motion.main
        className={`w-[150vw] h-screen justify-center py-24 lg:py-0 flex bg-bgPrimary bg-opacity-20 backdrop-blur-2xl`}
      >
        <motion.div
          animate={{ x: isLogin ? 0 : "-50vw" }}
          transition={{ duration: 0.5, type: "spring", bounce: 0.25 }}
          className={`flex w-[150vw]`}
        >
          {/* SIGN UP */}
          <motion.div
            className={`w-1/3 h-screen flex flex-col items-center justify-center`}
          >
            <h1 className={`text-2xl`}>Sign Up</h1>

            <div className={`flex flex-col`}>
              <input
                type="text"
                placeholder="Username"
                onChange={(e) => setUserName(e.target.value)}
                value={userName}
                className={`bg-containerSecondary bg-opacity-20  backdrop-blur-lg w-80 p-2 rounded-full border border-blue mt-4`}
              />
              <input
                type="text"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className={`bg-containerSecondary bg-opacity-20  backdrop-blur-lg w-80 p-2 rounded-full border border-blue mt-4`}
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className={`bg-containerSecondary bg-opacity-20  backdrop-blur-lg w-80 p-2 rounded-full border border-blue mt-4`}
              />
              <button
                onClick={() => signUp()}
                className={`bg-blue mt-16 py-2 rounded-full`}
              >
                Sign Up
              </button>
              <p className={`mt-4`}>
                Have an account?{" "}
                <span
                  onClick={() => handleIsLogin()}
                  className={`text-blue cursor-pointer`}
                >
                  Sign In
                </span>
              </p>
            </div>
          </motion.div>

          {/* LOGO */}
          <motion.div
            className={`w-1/3 h-screen flex flex-col items-center justify-center`}
          ></motion.div>
          {/* LOGIN */}
          <motion.div
            className={`w-1/3 h-screen flex flex-col items-center justify-center`}
          >
            <h1 className={`text-2xl`}>Sign In</h1>
            <div className={`flex flex-col`}>
              <input
                type="text"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className={`bg-containerSecondary bg-opacity-20  backdrop-blur-lg w-80 p-2 rounded-full border border-blue mt-4`}
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className={`bg-containerSecondary bg-opacity-20  backdrop-blur-lg w-80 p-2 rounded-full border border-blue mt-4`}
              />
              <button
                onClick={() => login()}
                className={`bg-blue mt-16 py-2 rounded-full`}
              >
                Sign In
              </button>
              <p className={`mt-4`}>
                Don't have an account?{" "}
                <span
                  onClick={() => handleIsLogin()}
                  className={`text-blue cursor-pointer`}
                >
                  Sign Up
                </span>{" "}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.main>
    </div>
  );
}
