import React from "react";

const Header = () => (
  <header className="w-full py-2 bg-[#fffbe8] text-[#1e2a6f] text-left shadow flex items-center">
    {/* Wave SVG background */}
    <svg
      className="w-full h-12 absolute left-0 top-0"
      viewBox="0 0 1440 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      style={{zIndex:0}}
    >
      <path
        fill="#ffd57a"
        fillOpacity="1"
        d="M0,160L60,165.3C120,171,240,181,360,186.7C480,192,600,192,720,186.7C840,181,960,171,1080,154.7C1200,139,1320,117,1380,106.7L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
      />
      <path
        fill="#ff9ecb"
        fillOpacity="0.7"
        d="M0,224L60,218.7C120,213,240,203,360,186.7C480,171,600,149,720,154.7C840,160,960,192,1080,186.7C1200,181,1320,139,1380,117.3L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
      />
    </svg>
    {/* Logo and text row */}
    <div className="flex items-center space-x-3 relative z-10 pl-4">
      <img
        src="/logos/acesphere-animation.svg"
        alt="AceSphere Logo"
        className="w-12 h-12"
      />
      <div className="flex flex-col">
        <h1 className="text-xl font-bold">AcesphereAI Blog</h1>
        <p className="text-xs mt-1">Your Markdown-powered blog</p>
      </div>
    </div>
  </header>
);

export default Header;