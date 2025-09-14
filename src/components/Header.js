import React from "react";

const Header = () => (
  <header className="relative w-full py-2 bg-gray-900 text-white text-center shadow flex flex-col items-center overflow-hidden">
    {/* Wave SVG background */}
    <svg
      className="absolute top-0 left-0 w-full h-12 -z-10"
      viewBox="0 0 1440 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
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
    {/* Logo */}
    <img
      src="/logos/acesphere-animation.svg"
      alt="AceSphere Logo"
      className="mx-auto mb-1 w-12 h-12"
    />
  <h1 className="text-xl font-bold">AcesphereAI Blog</h1>
    <p className="text-xs mt-1">Your Markdown-powered blog</p>
  </header>
);

export default Header;