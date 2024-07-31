import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span>
          <img src="/images/logo.png" className="object-scale-down h-20"/>
        </span>
        <p className="text-slate-600 px-4">&copy; 2024 | Maitsam Kadzim<br/>Developed Using NextJs, Framer Motion, Tailwind Css, Heroicons</p>
      </div>
    </footer>
  );
};

export default Footer;