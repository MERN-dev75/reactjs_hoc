import React from 'react';
import styles from "../styles/login.module.css"

const LoginPage = () => {
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
              id="username"
              type="text"
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
              id="password"
              type="password"
              placeholder="Enter your password"
              className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          {/* Submit Button */}
          <button
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
