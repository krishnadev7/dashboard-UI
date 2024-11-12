import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Projects from "./components/Projects";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <div className="flex w-full min-h-screen bg-white text-[#0D062D]">
      <Sidebar />
      <main
        className={`flex flex-col w-full ${
          isSidebarOpen ? "ml-56" : "ml-16"
        } transition-all duration-300`}
      >
        <Navbar />
          <Routes>
            <Route path="/projects/:id" element={<Projects />} />
          </Routes>
      </main>
    </div>
  );
}

export default App;
