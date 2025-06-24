
import React from "react";

export default function Header() {

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm z-10">
      <div className="px-4 md:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center"></div>

        <div className="flex items-center space-x-4">
          <button className="relative p-2 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition duration-150">
            {/* <Bell className="h-6 w-6" /> */}
            {/* <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span> */}
          </button>

          <div className="flex items-center space-x-2">
            {/* <span className="text-sm font-medium hidden md:block">
              {user.user?.fullName}
            </span> */}
          </div>
        </div>
      </div>
    </header>
  );
}