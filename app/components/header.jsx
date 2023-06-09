"use client"

import React, { useState } from "react";
import { FaSearch, FaUser } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";

function Header() {
  const [searchValue, setSearchValue] = useState('');
  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto py-3  flex items-center gap-4">
        <h1 className="text-2xl font-bold text-gray-200 text-center mb-2">
          همگامان سازه
        </h1>

        <div className="flex  justify-center border rounded-md  bg-gray-200 overflow-hidden relative">
          <input
            className=" text-gray-800 bg-gray-200 px-4 py-2 focus:outline-none"
            placeholder="جستجو..."
            value={searchValue}
            onChange={handleInputChange}
          />
          {searchValue && (
            <BiSearchAlt size={40} className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:scale-125 transition duration-200" />
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
