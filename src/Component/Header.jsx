"use client";
import React, { useEffect } from "react";

function Header() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelectorAll("header");
      header.forEach((e) => {
        e.classList.toggle("sticky", window.scrollY > 10);
      });
      const arw = document.querySelector(".arrow");

      arw.classList.toggle("active", window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header>
        <div className="container">
          <div className="logo">
            <img loading="eager" src="/images/Haista-Logo-R-2.png" alt="" />
          </div>
          <a target="_blank" href="https://api.whatsapp.com/send?phone=905342050230&text=Hi%2C%0AI%20have%20some%20questions%20regarding%20hair%20transplant%20operation.">
            <button>Quick Quote via WhatsApp</button>
          </a>
        </div>
      </header>
      <header className="mb">
        <div className="container">
          <div className="logo">
            <img loading="eager" src="/images/Haista-Logo-R-1.png" alt="" />
          </div>
        </div>
      </header>
      <a target="_blank" href="#">
    <div className="arrow">
      <svg width={18} height={10} viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.5 8.75L9 1.25L16.5 8.75" stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  </a>
    </>
  );
}

export default Header;
