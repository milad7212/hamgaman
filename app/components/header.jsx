"use client"
import React, { useState } from "react";
import { BiSearchAlt,BiMenuAltLeft } from "react-icons/bi";
import { FaSignInAlt } from "react-icons/fa";

function LoginButton() {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-md flex items-center gap-2 transition duration-300 transform hover:scale-105">
      <FaSignInAlt />
      <span>ورود</span>
    </button>
  );
}

function SignupButton() {
  return (
    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-3 rounded-md flex items-center gap-2 transition duration-300 transform hover:scale-105">
      <FaSignInAlt />
      <span>ورود</span>
    </button>
  );
}

function Header() {
  const [searchValue, setSearchValue] = useState("");
  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = () => {
    // Perform search logic here
    console.log(`Searching for ${searchValue}`);
  };

  return (
    <header className="bg-gray-800 text-white p-2">
      <div className="container mx-auto py-2 grid grid-cols-[80px_1fr_80px] md:flex md:items-center md:gap-4 gap-y-4">
        

        <span className="block md:hidden ">
          <BiMenuAltLeft size={40}/>
        </span>
        <h1 className="text-2xl font-bold text-gray-200 whitespace-nowrap text-center mb-2 md:mb-0">
          همگامان سازه
        </h1>
       

        <div className="relative row-start-2 col-start-1 col-span-3">
          <input
            className="w-full text-gray-800 bg-gray-200 px-4 py-2 focus:outline-none rounded-md"
            placeholder="جستجو..."
            value={searchValue}
            onChange={handleInputChange}
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                handleSearch();
              }
            }}
            aria-label="Search"
            role="search"
          />
          {searchValue && (
            <BiSearchAlt
              size={30}
              onClick={handleSearch}
              className="text-gray-600 absolute cursor-pointer left-2 top-1/2 -translate-y-1/2 transition duration-300 transform hover:scale-125"
              aria-label="Search"
            />
          )}
        </div>
        <div className="mr-auto flex items-center gap-2 md:gap-4 ">
         
          <SignupButton />
        </div>
      </div>
    </header>
  );
}

export default Header;