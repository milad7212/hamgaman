"use client";
import React, { useState } from "react";

import GalleryImages from "../components/GalleryImages";
import { FaTh, FaList } from "react-icons/fa";
import ComponentCard from "../components/CommentCard";
const ConstructionPage = () => {
 
  const [activeTab, setActiveTab] = useState(0);
  const [view, setView] = useState("grid");
  
  

  const handleTabChange = (index) => {
    setActiveTab(index);
  };
  const handleChangeView = (newView) => {
    setView(newView);
    // console.log(newView);
  };

  return (
    <div className="container mx-auto  mt-4" >
      <div className="flex items-center mb-4">
        <img
          src="/images/milad.jpeg" // Replace with the actual path to the profile picture
          alt="Profile Picture"
          className="w-20 h-20 rounded-full mr-4"
        />
        <div className="mr-4">
          <h6  className="text-lg font-semibold">میلاد حسنی</h6>

          <div className="flex flex-col">
            <div className="flex">
              <span className="ml-4">Posts: 10</span>
              <span>Likes: 100</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mr-3 mt-2 h-24  overflow-hidden">
        <span>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
          reiciendis beatae veniam repellendus maiores tempore alias dicta, sit
          harum nemo!
        </span>
      </div>
      <div className="w-full">
        <ul className="flex border-b">
          <li
            className={`mr-4 ${
              activeTab === 0
                ? "text-blue-500 border-blue-500"
                : "text-gray-500 hover:text-blue-500 hover:border-blue-500"
            }`}
          >
            <button
              onClick={() => handleTabChange(0)}
              className="relative focus:outline-none"
            >
              <span className="py-2 px-4 block">عکس</span>
             
                <span className="absolute top-0 -left-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none  rounded-full">
                  11
                </span>
              
            </button>
          </li>
          <li
            className={`mr-4 ${
              activeTab === 1
                ? "text-blue-500 border-blue-500"
                : "text-gray-500 hover:text-blue-500 hover:border-blue-500"
            }`}
          >
            <button
              onClick={() => handleTabChange(1)}
              className="relative focus:outline-none"
            >
               <span className="py-2 px-4 block">نظرات</span>
             
             <span className="absolute top-0 -left-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none  rounded-full">
               11
             </span>
              
            </button>
          </li>
          <li
            className={`mr-4 ${
              activeTab === 2
                ? "text-blue-500 border-blue-500"
                : "text-gray-500 hover:text-blue-500 hover:border-blue-500"
            }`}
          >
            <button
              onClick={() => handleTabChange(2)}
              className="py-2 px-4 block focus:outline-none"
            >
              رزومه
            </button>
          </li>
          <div className="flex justify-end mb-4 mr-auto ml-2">
            <button
              className={`ml-2 p-2 rounded-sm ${
                view === "grid" ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => handleChangeView("grid")}
            >
              <FaTh />
            </button>
            <button
              className={`p-2 ${
                view === "list" ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => handleChangeView("list")}
            >
              <FaList />
            </button>
          </div>
        </ul>
        <div className="p-1">
          {activeTab === 0 && (
            <div>
              <GalleryImages view={view} />

              {/* Add more photos or customize the photo display */}
            </div>
          )}
          {activeTab === 1 && (
            <div>
              <ComponentCard name="میلاد حسنی" comment="برای من که کار کرد خوب بود راضی بودم فقط کمی بدقول هست"/>
              <ComponentCard/>
              <ComponentCard/>
              
              {/* Add more comments or customize the comment display */}
            </div>
          )}
          {activeTab === 2 && (
            <div>
              <p>Resume content goes here.</p>
              {/* Customize the resume content */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConstructionPage;
