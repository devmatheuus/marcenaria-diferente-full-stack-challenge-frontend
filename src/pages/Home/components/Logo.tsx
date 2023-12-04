import React from "react";
import { FaRocket } from "react-icons/fa";

const Logo: React.FC = () => {
  return (
    <header className="flex w-full items-center justify-center bg-slate-50 py-5">
      <div className="flex items-center gap-3 ">
        <FaRocket className="text-2xl text-[#ff0c65]" />
        <h1
          className="text-3xl font-extrabold"
          style={{
            background: "-webkit-linear-gradient(45deg, #ff0c65,#b85ab4)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          SPACE X
        </h1>
      </div>
    </header>
  );
};

export default Logo;
