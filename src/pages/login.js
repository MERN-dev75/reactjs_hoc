import React, { useState } from 'react';
import { useRouter} from "next/router"
import styles from "../styles/login.module.css"
import axios from 'axios';

const LoginPage = () => {
  const router = useRouter();
  const [userName, setUserName] = useState("q222wereedqwer");
  const [password, setPassword] = useState("2asdsddasd");

  return (
    <div className={styles.page}>
      <div className={styles.main}>
        <h2 className="mb-6 text-2xl font-extrabold text-center text-gray-800">
          Welcome Back!
        </h2>
        <form className={styles.form}>
          {/* Username Field */}
          <div className={styles.inputblock}>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              onChange={(e)=>setUserName(e.target.value)}
              id="username"
              type="text"
              value={userName}
              placeholder="Enter your username"
              className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          {/* Password Field */}
          <div className={styles.inputblock}>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              onChange={(e)=>setPassword(e.target.value)}
              id="password"
              value={password}
              type="password"
              placeholder="Enter your password"
              className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          {/* Submit Button */}
          <button
            onClick={async (e)=>{
              e.preventDefault();
              if(userName!=="" && password!==""){
                try {
                  const getLogin = await axios.post("http://localhost:4000/api/verifyPassword",
                    {
                      username: userName,
                      password: password
                    }
                  )
                  sessionStorage.setItem("accessToken", getLogin?.data?.accessToken)
                  sessionStorage.setItem("refreshToken", getLogin?.data?.refreshToken)
                  await router.push("/");
                } catch (error) {
                  console.log("Error 51", error)
                }
              }
            }}
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-md shadow hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
          {/* Links */}
          <div className="flex justify-between text-sm text-gray-600">
            <a href="#" className="hover:underline hover:text-blue-600">
              Forgot Password?
            </a>{" "}
            <a href="#" className="hover:underline hover:text-blue-600">
              Sign Up
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
