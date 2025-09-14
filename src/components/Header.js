import React from "react";

const Header = () => (
  <header className="w-full py-6 bg-gray-900 text-white text-center shadow">
    <img
    src="/logos/acesphere-animation.svg"
    alt="AceSphere Logo"
    className="mx-auto mb-2 w-20 h-20"
    style={{ maxWidth: "80px", maxHeight: "80px" }}
    />
    <h1 className="text-3xl font-bold">AcesphereAI Blogs</h1>
    <p className="text-sm mt-2">AI • ML • Frontend • Backend • Future of Tech</p>
  </header>
);

export default Header;
