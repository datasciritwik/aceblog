import React from "react";

const Footer = () => (
  <footer className="w-full py-4 bg-gray-100 text-center text-xs text-gray-600 border-t mt-8">
    <span>&copy; {new Date().getFullYear()} AceBlog. All rights reserved.</span>
  </footer>
);

export default Footer;
