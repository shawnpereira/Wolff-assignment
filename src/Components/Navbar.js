import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-300 p-8 ">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-10">
        {/* Logo */}
        <div className="flex items-center px-4">
          <span className="text-black text-2xl font-semibold">Wolff Olins</span>
        </div>

        {/* Navigation Links */}
        <ul className="flex text-lg space-x-10">
          <li>
            <a href="#" className="text-slate-400 hover:text-black ">
              Work
            </a>
          </li>
          <li>
            <a href="#" className="text-slate-400 hover:text-black">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-slate-400 hover:text-black">
              News
            </a>
          </li>
          <li>
            <a href="#" className="text-slate-400 hover:text-black">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="text-slate-400 hover:text-black">
              Search logo
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
