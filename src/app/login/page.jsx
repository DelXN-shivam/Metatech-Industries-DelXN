"use client";
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { AtSign, Lock, Check, Chrome } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log({ email, password, rememberMe });
  };

  return (
    <>
      <Head>
        <title>Login | Your App</title>
      </Head>
      
      <div className="min-h-screen flex items-stretch bg-gradient-to-br from-blue-400 to-purple-200">
        {/* Left Side - Decorative Image Section */}
        <div className="hidden lg:block lg:w-1/2 relative overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center z-0" 
               style={{backgroundImage: "url('/api/placeholder/1200/800')"}}></div>
          <div className="absolute inset-0 bg-blue-400 opacity-60"></div>
          <div className="relative z-10 p-12 text-white flex flex-col justify-center h-full">
            <h1 className="text-4xl font-bold mb-4">Welcome Back!</h1>
            <p className="text-xl mb-6">Unlock access to your personalized dashboard</p>
            <div className="flex items-center space-x-3 mb-4">
              <Check className="text-purple-800" />
              <span>Secure Login</span>
            </div>
            <div className="flex items-center space-x-3 mb-4">
              <Check className="text-purple-800" />
              <span>Personalized Experience</span>
            </div>
            <div className="flex items-center space-x-3">
              <Check className="text-purple-800" />
              <span>Advanced Security</span>
            </div>
          </div>
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
            <div className="mt-6 relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>

            {/* Google Sign In */}
            <div className="mt-6">
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
            </div>

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



// 'use client';

// import { useState } from 'react';
// import Head from 'next/head';
// import Link from 'next/link';

// export default function LoginPage() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [rememberMe, setRememberMe] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle login logic here
//     console.log({ email, password, rememberMe });
//   };

//   return (
//     <>
//       <Head>
//         <title>Login | Your App Name</title>
//       </Head>
      
//       <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-50">
//         <div className="sm:mx-auto sm:w-full sm:max-w-md">
//           <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//             Sign in to your account
//           </h2>
//           <p className="mt-2 text-center text-sm text-gray-600">
//             Or{' '}
//             <Link href="/register" className="font-medium text-blue-400 hover:text-blue-400">
//               create a new account
//             </Link>
//           </p>
//         </div>

//         <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
//           <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
//             <form className="space-y-6" onSubmit={handleSubmit}>
//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                   Email address
//                 </label>
//                 <div className="mt-1">
//                   <input
//                     id="email"
//                     name="email"
//                     type="email"
//                     autoComplete="email"
//                     required
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-400 focus:border-blue-400 sm:text-sm"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//                   Password
//                 </label>
//                 <div className="mt-1">
//                   <input
//                     id="password"
//                     name="password"
//                     type="password"
//                     autoComplete="current-password"
//                     required
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-400 focus:border-blue-400 sm:text-sm"
//                   />
//                 </div>
//               </div>

//               <div className="flex items-center justify-between">
//                 <div className="flex items-center">
//                   <input
//                     id="remember-me"
//                     name="remember-me"
//                     type="checkbox"
//                     checked={rememberMe}
//                     onChange={(e) => setRememberMe(e.target.checked)}
//                     className="h-4 w-4 text-blue-400 focus:ring-blue-400 border-gray-300 rounded"
//                   />
//                   <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
//                     Remember me
//                   </label>
//                 </div>

//                 <div className="text-sm">
//                   <Link href="/forgot-password" className="font-medium text-blue-400 hover:text-blue-400">
//                     Forgot your password?
//                   </Link>
//                 </div>
//               </div>

//               <div>
//                 <button
//                   type="submit"
//                   className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-400 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
//                 >
//                   Sign in
//                 </button>
//               </div>
//             </form>

//             <div className="mt-6">
//               <div className="relative">
//                 <div className="absolute inset-0 flex items-center">
//                   <div className="w-full border-t border-gray-300" />
//                 </div>
//                 <div className="relative flex justify-center text-sm">
//                   <span className="px-2 bg-white text-gray-500">
//                     Or continue with
//                   </span>
//                 </div>
//               </div>

//               <div className="mt-6 gap-3">
//                 <div>
//                   <button
//                     type="button"
//                     className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
//                   >
//                     <span className="sr-only">Sign in with Google</span>
//                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                       <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
//                     </svg>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }




// // pages/login.jsx
// import React from 'react';

// const LoginPage = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//         {/* Header */}
//         <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>

//         {/* Form */}
//         <form className="space-y-6">
//           {/* Email Field */}
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               placeholder="Enter your email"
//               required
//             />
//           </div>

//           {/* Password Field */}
//           <div>
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               placeholder="Enter your password"
//               required
//             />
//           </div>

//           {/* Forgot Password */}
//           <div className="text-sm text-right">
//             <a href="#" className="text-blue-500 hover:underline">
//               Forgot Password?
//             </a>
//           </div>

//           {/* Login Button */}
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
//           >
//             Login
//           </button>
//         </form>

//         {/* Sign Up Link */}
//         <p className="mt-4 text-center text-sm text-gray-600">
//           Don’t have an account?{' '}
//           <a href="/signup" className="text-blue-500 hover:underline">
//             Sign Up
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;




// import React from 'react';

// const LoginPage = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       {/* Login Container */}
//       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
//         {/* Header */}
//         <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>

//         {/* Form */}
//         <form className="space-y-4">
//           {/* Email Input */}
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//               Email Address
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               placeholder="Enter your email"
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-400 focus:border-blue-400 sm:text-sm"
//             />
//           </div>

//           {/* Password Input */}
//           <div>
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               placeholder="Enter your password"
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-400 focus:border-blue-400 sm:text-sm"
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-blue-400 text-white py-2 px-4 rounded-md hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
//           >
//             Login
//           </button>
//         </form>

//         {/* Footer Links */}
//         <div className="mt-6 text-center text-sm text-gray-600">
//           <p>
//             Don't have an account?{' '}
//             <a href="/register" className="font-medium text-blue-400 hover:text-blue-400">
//               Register here
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;