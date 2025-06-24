"use client";

import React, { useState } from "react";
import { Menu, X, LogOut, ChartBar } from "lucide-react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed z-20 bottom-4 right-4 p-3 rounded-full bg-gray-400 text-white shadow-lg"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <aside
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 fixed md:relative inset-y-0 left-0 z-20 w-64 bg-gray-400 text-white transform transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-center h-16 border-b border-gray-800">
            <ChartBar className="h-8 w-8 mr-2" />
            <h1 className="text-xl font-bold mr-12">Chat App</h1>
          </div>

          <nav className="px-4 py-6 flex-1">
            <ul className="space-y-1">
              <li></li>
            </ul>
          </nav>

          <div className="p-4 border-t border-gray-800">
            <button className="flex items-center w-full px-4 py-3 rounded-lg text-blue-100 hover:bg-gray-800 transition duration-150">
              <LogOut className="h-5 w-5 mr-3" />
              <span>Log Out</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
