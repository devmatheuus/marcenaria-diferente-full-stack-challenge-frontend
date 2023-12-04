import React from "react";

const Footer: React.FC = () => {
  return (
    <footer
      className="absolute right-0 mt-5 flex w-full items-center justify-center bg-white py-4 shadow-inner"
      style={{
        boxShadow: "0px -10px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <p
        className="font-semibold"
        style={{
          background: "-webkit-linear-gradient(45deg, #ff0c65,#b85ab4)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Challenge Coodesh ©
      </p>
    </footer>
  );
};

export default Footer;
