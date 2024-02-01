import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import "./Footer.css";
const Footer = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: Adds a smooth scrolling effect
    });
  };
  return (
    <div className={`footer ${isScrolled ? "scrolled" : ""}`}>
      <div className="footer">
        <div className="footer-top">
          <div className="company">
            <span>2024 Wolff Olins</span>
          </div>
          <div className="company-policies">
            <p>
              <b>Talk to us or ask us about anything</b>
            </p>

            <span>Contact Us</span>
            <span>Cookie Policy</span>
            <span>Privacy Notice</span>
          </div>
          <div className="socials">
            <li>
              <FaArrowRight /> LinkedIn
            </li>
            <li>
              <FaArrowRight /> Twitter
            </li>
            <li>
              <FaArrowRight /> Instagram
            </li>
            <li>
              <FaArrowRight /> Youtube
            </li>
            <li>
              <FaArrowRight /> Archive
            </li>
          </div>
          <div className="back-btn" onClick={handleScrollToTop}>
            <div className="icon">
              <FaArrowUp />
            </div>

            <span>Back to Top</span>
          </div>
        </div>
        <div className="footer-bottom">
          <span>Wolff Olins</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
