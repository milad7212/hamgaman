"use client"
import React, { useState } from 'react';
import { FaTh, FaList } from 'react-icons/fa';

const Gallery = () => {
  const [view, setView] = useState('grid');

  const images = [
    {
      id: 1,
      src: '/images/milad.jpeg',
      caption: 'Image 1',
    },
    {
      id: 2,
      src: '/images/milad.jpeg',
      caption: 'Image 2',
    },
    {
      id: 2,
      src: '/images/milad.jpeg',
      caption: 'Image 2',
    },
    {
      id: 2,
      src: '/images/milad.jpeg',
      caption: 'Image 2',
    },
    {
      id: 2,
      src: '/images/milad.jpeg',
      caption: 'Image 2',
    },
    {
      id: 2,
      src: '/images/milad.jpeg',
      caption: 'Image 2',
    },{
      id: 2,
      src: '/images/milad.jpeg',
      caption: 'Image 2',
    },{
      id: 2,
      src: '/images/milad.jpeg',
      caption: 'Image 2',
    },{
      id: 2,
      src: '/images/milad.jpeg',
      caption: 'Image 2',
    },{
      id: 2,
      src: '/images/milad.jpeg',
      caption: 'Image 2',
    },{
      id: 2,
      src: '/images/milad.jpeg',
      caption: 'Image 2',
    },{
      id: 2,
      src: '/images/milad.jpeg',
      caption: 'Image 2',
    },{
      id: 2,
      src: '/images/milad.jpeg',
      caption: 'Image 2',
    },
    // Add more images here
  ];

  const handleChangeView = (newView) => {
    setView(newView);
  };

  return (
    <div>
     {false&& <div className="flex justify-end mb-4">
        <button
          className={`ml-2 p-2 rounded-sm ${
            view === 'grid' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
          onClick={() => handleChangeView('grid')}
        >
          <FaTh />
        </button>
        <button
          className={`p-2 ${
            view === 'list' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
          onClick={() => handleChangeView('list')}
        >
          <FaList />
        </button>
      </div>}

      {view === 'grid' ? (
        <div className="grid grid-cols-3 gap-[1px]">
          {images.map((image) => (
            <div key={image.id}>
              <img src={image.src} alt={image.caption} className="w-full rounded-sm" />
              {/* <p>{image.caption}</p> */}
            </div>
          ))}
        </div>
      ) : (
        <ul>
          {images.map((image) => (
            <li key={image.id} className="flex items-center my-2">
              <img src={image.src} alt={image.caption} className="w-1/4 rounded-md" />
              <p className="ml-4">{image.caption}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Gallery;
