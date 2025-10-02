import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 p-4 text-center">
      <p>© {new Date().getFullYear()} My React App</p>
    </footer>
  );
}

export default Footer;
