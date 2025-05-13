"use client";
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { AtSign, Lock, Check, Chrome } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    document.title = "Login | Metatech Industries";
  }), [];

  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Redirect to Amazon.com
      window.location.href = "https://metatech-industries-admin.vercel.app/";
    };

  return (
    <>
      <div className="min-h-screen flex items-stretch bg-gradient-to-br from-blue-400 to-purple-200">
        {/* Left Side - Decorative Image Section */}
        <div className="hidden lg:block lg:w-1/2 relative overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center z-0" 
               style={{backgroundImage: "url('/images/login_image.jpg')"}}></div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white/80 backdrop-blur-sm">
          <div className="w-full max-w-md">
            {/* Company Logo */}
            <div className="mb-8 text-center">
              <div className="inline-block pb-4">
                <div className="bg-white p-4 rounded-lg">
                                            <Image
                                                src="/images/metatech_logo.png"
                                                width={230}
                                                height={80}
                                                alt="Metatech Logo"/>
                                        </div>
              </div>
              <p className="text-gray-600 mt-2">Sign in to continue</p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Email Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <AtSign className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  className="pl-10 block w-full px-3 py-3 border text-gray-600 border-gray-300 rounded-lg shadow-sm 
                             focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 
                             transition duration-300 ease-in-out hover:border-blue-400"/>
              </div>

              {/* Password Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="pl-10 block w-full px-3 py-3 border text-gray-600 border-gray-300 rounded-lg shadow-sm 
                             focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 
                             transition duration-300 ease-in-out hover:border-blue-400"/>
              </div>

              {/* Remember Me and Forgot Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="h-4 w-4 text-blue-400 focus:ring-blue-400 border-gray-300 rounded"/>

                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <Link href="/forgot-password" className="font-medium text-blue-400 hover:text-blue-800">
                    Forgot password?
                  </Link>
                </div>
              </div>

              {/* Sign In Button */}
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent 
                             rounded-lg shadow-md text-sm font-semibold text-white 
                             bg-gradient-to-r from-blue-400 to-blue-600 
                             hover:from-blue-400 hover:to-purple-700 
                             focus:outline-none focus:ring-2 focus:ring-offset-2 
                             focus:ring-blue-400 transition duration-300 ease-in-out transform 
                             hover:scale-[1.02] active:scale-[0.98]">
                  Sign In
                </button>
              </div>
            </form>

            {/* Social Login Divider */}
            {/* <div className="mt-6 relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Or continue with
                </span>
              </div>
            </div> */}

            {/* Google Sign In */}
            {/* <div className="mt-6">
              <button
                type="button"
                className="w-full inline-flex justify-center items-center py-3 px-4 
                           border border-gray-300 rounded-lg shadow-sm bg-white 
                           text-sm font-medium text-gray-600 hover:bg-gray-50 
                           transition duration-300 ease-in-out transform 
                           hover:scale-[1.02] active:scale-[0.98]">
                <Chrome className="w-5 h-5 mr-2" />
                Sign in with Google
              </button>
            </div> */}

            {/* Create Account Link */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{' '}
                <Link href="/register" className="font-medium text-blue-400 hover:text-blue-800">
                  Create an account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
