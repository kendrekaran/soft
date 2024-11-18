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
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Header */}
        <motion.header
          className="flex items-center justify-between"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <div className="flex items-center gap-12">
            <div className="cursor-pointer text-rose-600 text-2xl font-semibold">
              surface<span className="text-white">insight</span>
            </div>
            <nav className="hidden md:flex gap-6">
              {["SurfaceAI", "Blog", "Events", "About", "Contact"].map((item) => (
                <span
                  key={item}
                  className="cursor-pointer text-sm hover:text-rose-600"
                >
                  {item}
                </span>
              ))}
            </nav>
          </div>
          <Button className="bg-black text-white border border-white hover:bg-rose-600">
            Request Demo
          </Button>
        </motion.header>

        {/* Main Content */}
        <main className="mt-12 grid md:grid-cols-2 gap-8 items-center pb-20">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
          >
            <div className="text-sm text-rose-600 tracking-wider">ARTICLE</div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              IMPLEMENTING RPA WITH CLARITY & CONFIDENCE
            </h1>
            <p className="text-gray-400 mt-4">
              SurfaceAI uses AI/ML techniques to capture and analyze in-depth process details.
            </p>
            <button className="bg-white text-gray-700 font-medium text-sm rounded-3xl px-4 py-2 mt-6 hover:bg-red-50 hover:text-red-700">
              Know More
            </button>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {[
                { href: "https://facebook.com", icon: "facebook" },
                { href: "https://twitter.com", icon: "twitter" },
                { href: "https://instagram.com", icon: "instagram" },
              ].map(({ href, icon }) => (
                <a key={icon} href={href} target="_blank" rel="noopener noreferrer">
                  <i className={`fab fa-${icon} text-xl hover:text-rose-600`}></i>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <div className="absolute inset-0 bg-rose-600 opacity-20 blur-3xl"></div>
            <img
              src="https://i.imgur.com/581MyGL.png"
              alt="Professional with phone"
              className="relative z-10 w-full max-w-md mx-auto"
            />
          </motion.div>
        </main>
      </div>
    </div>
  );
}
