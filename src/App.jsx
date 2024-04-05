import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar.jsx";
import Briefing from "./Components/Briefing.jsx";
import ForYou from "./Components/ForYou.jsx";
export default function App() {
  return (
    <div>
      <Navbar />
      <div className="bg-[#f6f8fc] w-full h-full px-28 py-4">
        <Briefing />
        <ForYou/>
      </div>
    </div>
  );
}
