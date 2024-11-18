import React from "react";
import { motion } from "framer-motion"; 

function Button({ children, className, ...props }) {
  return (
    <button
      className={`px-4 py-2 rounded transition-colors ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default function Home() {

  return (
    <div className="min-h-full bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* Header Section with Animation */}
        <motion.header
          className="flex items-center justify-between"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <div className="flex items-center gap-12">
            {/* Logo */}
            <div
              className="cursor-pointer text-rose-600 text-2xl font-semibold"
              
            >
              surface<span className="text-white">insight</span>
            </div>
            {/* Navigation Links */}
            <nav className="hidden md:flex items-center gap-6">
              <span
                className="cursor-pointer text-sm hover:text-rose-600 transition-colors"
               
              >
                SurfaceAI
              </span>
              <span
                className="cursor-pointer text-sm hover:text-rose-600 transition-colors"
              >
                Blog
              </span>
              <span
                className="cursor-pointer text-sm hover:text-rose-600 transition-colors"
              >
                Events
              </span>
              <span
                className="cursor-pointer text-sm hover:text-rose-600 transition-colors"
              >
                About
              </span>
              <span
                className="cursor-pointer text-sm hover:text-rose-600 transition-colors"
              >
                Contact
              </span>
            </nav>
          </div>
          {/* Request Demo Button */}
          <Button className="bg-black text-white border border-white hover:bg-rose-600">
            Request Demo
          </Button>
        </motion.header>

        {/* Main Content */}
        <main className="mt-12 grid md:grid-cols-2 gap-8 items-center  pb-28">
          {/* Left Section */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <div className="text-sm text-rose-600 tracking-wider">ARTICLE</div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              IMPLEMENTING RPA WITH CLARITY & CONFIDENCE
            </h1>
            <p className="text-gray-400">
              SurfaceAI uses various AI/ML techniques to capture and analyze
              in-depth details of the underlying process.
            </p>
            <button
              className="flex items-center justify-center bg-white text-gray-700 font-medium text-sm rounded-3xl px-4 py-2 h-10 shadow-md transition-all duration-300 ease-in-out hover:bg-red-50 hover:text-red-700 active:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 disabled:opacity-50"
              role="button"
            >
              Know More
            </button>
            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2 ">
  {/* Facebook Icon */}
  <a
    href="https://www.facebook.com"
    target="_blank"
    rel="noopener noreferrer"
    className="cursor-pointer hover:text-rose-600"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="w-2 h-2"
    >
      <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24h11.494v-9.294H9.692V10.41h3.128V7.79c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.465.099 2.797.143v3.24h-1.918c-1.504 0-1.795.716-1.795 1.763v2.31h3.587l-.467 3.295h-3.12V24h6.116c.729 0 1.326-.597 1.326-1.326V1.326C24 .597 23.403 0 22.675 0z" />
    </svg>
  </a>
  
  {/* Twitter Icon */}
  <a
    href="https://www.twitter.com"
    target="_blank"
    rel="noopener noreferrer"
    className="cursor-pointer hover:text-rose-600"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="w-2 h-2"
    >
      <path d="M24 4.557a9.902 9.902 0 01-2.828.775A4.932 4.932 0 0023.337 3.1a9.865 9.865 0 01-3.127 1.195 4.916 4.916 0 00-8.379 4.482A13.944 13.944 0 011.671 3.149 4.915 4.915 0 003.194 9.71 4.899 4.899 0 01.96 9.018v.06a4.918 4.918 0 003.95 4.827 4.903 4.903 0 01-2.213.084 4.919 4.919 0 004.588 3.417A9.869 9.869 0 010 19.54a13.913 13.913 0 007.548 2.212c9.058 0 14.009-7.513 14.009-14.009 0-.213-.004-.426-.014-.637A10.012 10.012 0 0024 4.557z" />
    </svg>
  </a>
  
  {/* Instagram Icon */}
  <a
    href="https://www.instagram.com"
    target="_blank"
    rel="noopener noreferrer"
    className="cursor-pointer hover:text-rose-600"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="w-2 h-2"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.322 3.608 1.297.975.975 1.235 2.242 1.297 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.322 2.633-1.297 3.608-.975.975-2.242 1.235-3.608 1.297-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.322-3.608-1.297-.975-.975-1.235-2.242-1.297-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.322-2.633 1.297-3.608.975-.975 2.242-1.235 3.608-1.297 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.257 0-3.67.015-4.947.072-1.496.066-2.794.35-3.85 1.405-1.055 1.055-1.339 2.354-1.405 3.85C2.178 8.33 2.163 8.743 2.163 12c0 3.257.015 3.67.072 4.947.066 1.496.35 2.794 1.405 3.85 1.055 1.055 2.354 1.339 3.85 1.405 1.276.057 1.69.072 4.947.072s3.67-.015 4.947-.072c1.496-.066 2.794-.35 3.85-1.405 1.055-1.055 1.339-2.354 1.405-3.85.057-1.276.072-1.69.072-4.947s-.015-3.67-.072-4.947c-.066-1.496-.35-2.794-1.405-3.85-1.055-1.055-2.354-1.339-3.85-1.405-1.276-.057-1.69-.072-4.947-.072zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.838 3.838 0 110-7.676 3.838 3.838 0 010 7.676zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
    </svg>
  </a>
</div>

          </motion.div>

          {/* Right Section */}
          <motion.div
            className="relative mt-[-40%] ml-20 md:mt-[0%] md:ml-0"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            {/* Decorative Background */}
            <div className="absolute inset-0 bg-rose-600 opacity-20 blur-3xl"></div>
            {/* Image */}
            <img
              src="https://i.imgur.com/581MyGL.png"
              alt="Professional with phone"
              className="relative z-10 w-full max-w-md mx-auto bg-transparent"
            />
            {/* Slider Buttons */}
            {/* Add any slider controls here */}
          </motion.div>
        </main>
      </div>

      {/* Decorative elements */}
    </div>
  );
}
