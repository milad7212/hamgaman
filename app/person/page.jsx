"use client"
import React, { useState } from 'react';
import GalleryImages from '../components/GalleryImages'
const ConstructionPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="container mx-auto px-4 mt-4">
      <div className="flex items-center mb-4">
        <img
          src="/images/milad.jpeg" // Replace with the actual path to the profile picture
          alt="Profile Picture"
          className="w-20 h-20 rounded-full mr-4"
        />
        <div className="flex flex-col">
          <h6 className="text-lg font-semibold">John Doe</h6>
          <div className="flex">
            <span className="mr-4">Posts: 10</span>
            <span>Likes: 100</span>
          </div>
        </div>
      </div>
      <div className="w-full">
        <ul className="flex border-b">
          <li className={`mr-4 ${activeTab === 0 ? 'text-blue-500 border-blue-500' : 'text-gray-500 hover:text-blue-500 hover:border-blue-500'}`}>
            <button
              onClick={() => handleTabChange(0)}
              className="py-2 px-4 block focus:outline-none"
            >
              عکس
            </button>
          </li>
          <li className={`mr-4 ${activeTab === 1 ? 'text-blue-500 border-blue-500' : 'text-gray-500 hover:text-blue-500 hover:border-blue-500'}`}>
            <button
              onClick={() => handleTabChange(1)}
              className="py-2 px-4 block focus:outline-none"
            >
              نظرات
            </button>
          </li>
          <li className={`mr-4 ${activeTab === 2 ? 'text-blue-500 border-blue-500' : 'text-gray-500 hover:text-blue-500 hover:border-blue-500'}`}>
            <button
              onClick={() => handleTabChange(2)}
              className="py-2 px-4 block focus:outline-none"
            >
              رزومه
            </button>
          </li>
        </ul>
        <div className="p-4">
          {activeTab === 0 && (
            <div>
                <GalleryImages/>
             
              {/* Add more photos or customize the photo display */}
            </div>
          )}
          {activeTab === 1 && (
            <div>
              <p className="mb-2">Sample Comment 1</p>
              <p className="mb-2">Sample Comment 2</p>
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
