import React from "react";
import "@/styles/globals.css";
import Home from "@/pages/Home";
import Footer from "./components/Footer";
import Logo from "./pages/Home/components/Logo";

const App: React.FC = () => {
  return (
    <>
      <Logo />
      <Home />
      <Footer />
    </>
  );
};

export default App;
