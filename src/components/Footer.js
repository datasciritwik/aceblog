import React from "react";

const Footer = () => (
  <footer className="w-full bg-gradient-to-r from-[#1e2a6f] to-[#7b61ff] text-white mt-auto text-xs">
    {/* Wave decoration at top */}
    <svg
      className="w-full h-12"
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

    {/* Content */}
    <div className="py-1 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-xs opacity-90 text-center md:text-left pl-4 pb-2">
          &copy; {new Date().getFullYear()} AcesphereAI Blog. All rights reserved.
        </div>
      </div>
      <div className="absolute bottom-2 right-4 flex items-center space-x-3">
        {/* X (Twitter) */}
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-8 h-8 rounded-md bg-white/10 hover:bg-white/20 transition hover:scale-110"
          aria-label="Follow us on X (Twitter)"
        >
          <svg
            className="w-5 h-5 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </a>
        {/* LinkedIn */}
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-8 h-8 rounded-md bg-white/10 hover:bg-white/20 transition hover:scale-110"
          aria-label="Connect with us on LinkedIn"
        >
          <svg
            className="w-5 h-5 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;