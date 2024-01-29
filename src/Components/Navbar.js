import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      // Check if user has scrolled down
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className=" bg-white ">
      <div
        className={`max-w-7xl mx-auto flex justify-between items-center px-10 ${
          scrolled ? "" : ""
        }`}
      >
        <div className="flex items-center px-4">
          <span className="text-black text-2xl font-bold">Wolff Olins</span>
        </div>

        {/* Navigation Links */}
        <ul className=" text-xl space-x-8 inline-flex items-center">
          <li>
            <a href="#" className="text-slate-700 hover:text-black ">
              Work
            </a>
          </li>
          <li>
            <a href="#" className="text-slate-700 hover:text-black">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-slate-700 hover:text-black">
              News
            </a>
          </li>
          <li>
            <a href="#" className="text-slate-700 hover:text-black">
              Contact
            </a>
          </li>
          <li>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="search"
                x="0"
                y="0"
                version="1.1"
                viewBox="0 0 29 29"
                width="16"
                height="16"
              >
                <path d="M11.854 21.854c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10zm0-18c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.588-8-8-8z"></path>
                <path d="M26.146 27.146a.997.997 0 0 1-.707-.293l-7.694-7.694a.999.999 0 1 1 1.414-1.414l7.694 7.694a.999.999 0 0 1-.707 1.707z"></path>
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
