import React from "react";

const Header: React.FC = () => {
  return (
    <nav className="bg-gray-800">
      <div className="flex items-center justify-between h-12 px-4">
        <h1 className="text-white text-lg">XSS Generator</h1>
      </div>
    </nav>
  );
};

export default Header;
