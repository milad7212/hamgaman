"use client"



import React, { useCallback, useState } from 'react';
import Header from '../components/header';
import PersonCard from '../components/personCard';
import { RiFilter2Fill, RiArrowUpDownFill } from 'react-icons/ri';

const App = () => {
  const [dataPeople, setDataPeople] = useState([
    {
      id: 1,
      name: "میلاد حسنی",
      skills: ["مهندس عمران", "برقکار", "تراکتور"],
      favorite: true,
      liked: 100,
      comments:[
        {id:12,text:'کارش بعد نیست',
        writer:{
        id:235,
        name:'hasan',
        family:'hosseni',
        date:'10/2/2022'
      }
    },{id:12,text:'کارش بعد نیست',
    writer:{
    id:235,
    name:'hasan',
    family:'hosseni',
    date:'10/2/2022'
  }
},
  ],
      notes:[{id:25,text:'قرار شد بیاد برام کار کنه', date:'12/4/2023'}]

    },
    {
      id: 2,
      favorite: false,
      name: "سجاد حسنی",
      skills: ["داربست ", "قالب بندی"],
      liked: 200,
    },
    {
      id: 3,
      favorite: false,
      name: "عباد حسنی",
      skills: ["طراحی نما", "پیمانکار"],
      liked: 1,
    },
    {
      id: 4,
      favorite: true,
      name: "عباد حسنی",
      skills: ["طراحی نما", "پیمانکار"],
      liked: 5,
    },
    {
      id: 5,
      favorite: false,
      name: "عباد حسنی",
      skills: ["طراحی نما", "پیمانکار"],
      liked: 4,
    },
    {
      id: 6,
      favorite: true,
      name: "عباد حسنی",
      skills: ["طراحی نما", "پیمانکار"],
      liked: 18,
    },
    {
      id: 7,
      favorite: false,
      name: "عباد حسنی",
      skills: ["طراحی نما", "پیمانکار"],
      liked: 11,
    },
    // Add more people data
  ]);

  const [filteredData, setFilteredData] = useState(dataPeople);
  const [sortBy, setSortBy] = useState('');
  const [filterFavorites, setFilterFavorites] = useState(false);
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);

  const clickOnHeart = useCallback(
    (selectedCard) => {
      const updatedPeople = dataPeople.map((person) => {
        if (person.id === selectedCard.id) {
          return { ...person, favorite: !person.favorite };
        }
        return person;
      });
      setDataPeople(updatedPeople);
    },
    [dataPeople]
  );

  const handleFilterFavorites = () => {
    setFilterFavorites(!filterFavorites);
  };

  const handleSortBy = () => {
    const sortOrder = sortBy === 'asc' ? 'desc' : 'asc';
    setSortBy(sortOrder);
  };

  const handleFilterByName = (event) => {
    const searchValue = event.target.value.toLowerCase();
    const filteredPeople = dataPeople.filter((person) =>
      person.name.toLowerCase().includes(searchValue)
    );
    setFilteredData(filteredPeople);
  };

  const handleFilterByHasLikeFromMe = () => {
    const filteredPeople = dataPeople.filter((person) => person.favorite);
    setFilteredData(filteredPeople);
  };

  const handleFilterByHasLike = () => {
    const filteredPeople = dataPeople.filter((person) => person.liked > 0);
    setFilteredData(filteredPeople);
  };

  const handleFilterByHasComment = () => {
    const filteredPeople = dataPeople.filter((person) => person.comments.length > 0);
    setFilteredData(filteredPeople);
  };

  const handleFilterByHasNoteFromMe = () => {
    const filteredPeople = dataPeople.filter((person) =>
      person.notes.some((note) => note.writer.name === 'Your Name')
    );
    setFilteredData(filteredPeople);
  };

  const handleFilterByJob = (job) => {
    const filteredPeople = dataPeople.filter((person) => person.skills.includes(job));
    setFilteredData(filteredPeople);
  };

  const handleSortByAlphabet = () => {
    const sortedPeople = [...filteredData].sort((a, b) => a.name.localeCompare(b.name));
    setFilteredData(sortedPeople);
    setSortBy('alphabet');
  };

  const handleSortByLiked = () => {
    const sortedPeople = [...filteredData].sort((a, b) => a.liked - b.liked);
    setFilteredData(sortedPeople);
    setSortBy('liked');
  };

  const handleSortByCommentCount = () => {
    const sortedPeople = [...filteredData].sort(
      (a, b) => a.comments.length - b.comments.length
    );
    setFilteredData(sortedPeople);
    setSortBy('commentCount');
  };

  const filteredAndSortedPeople = filteredData
    .filter((person) => !filterFavorites || person.favorite)
    .sort((a, b) => {
      if (sortBy === 'asc') {
        return a.name.localeCompare(b.name);
      } else if (sortBy === 'desc') {
        return b.name.localeCompare(a.name);
      }
      return 0;
    });

  const openFilterModal = () => {
    setIsFilterMenuOpen(true);
  };

  const closeFilterModal = () => {
    setIsFilterMenuOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto py-4 px-6">
          <div className="flex justify-between mb-4">
            <button
              onClick={openFilterModal}
              className="flex items-center space-x-1 px-3 py-1 bg-gray-900 text-white rounded-lg focus:outline-none"
            >
              <RiFilter2Fill size={18} />
              <span>{filterFavorites ? 'All' : 'Favorites'}</span>
            </button>
            <button
              onClick={handleSortBy}
              className="flex items-center space-x-1 px-3 py-1 bg-gray-900 text-white rounded-lg focus:outline-none"
            >
              <RiArrowUpDownFill size={18} />
              <span>{sortBy === 'asc' ? 'A-Z' : 'Z-A'}</span>
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredAndSortedPeople.map((person) => (
              <PersonCard data={person} key={person.id} clickOnHeart={clickOnHeart} />
            ))}
          </div>
          {isFilterMenuOpen && (
           <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
           <div className="bg-white rounded-lg p-4 w-96">
             <div className="space-y-4">
               <input
                 type="text"
                 placeholder="Filter by name"
                 className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none w-full"
                 onChange={handleFilterByName}
               />
               <button
                 onClick={handleFilterByHasLikeFromMe}
                 className="btn-filter"
               >
                 Has Like from Me
               </button>
               <button onClick={handleFilterByHasLike} className="btn-filter">
                 Has Like
               </button>
               <button onClick={handleFilterByHasComment} className="btn-filter">
                 Has Comment
               </button>
               <button onClick={handleFilterByHasNoteFromMe} className="btn-filter">
                 Has Note from Me
               </button>
               <select
                 onChange={(e) => handleFilterByJob(e.target.value)}
                 className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none w-full"
               >
                 <option value="">All Jobs</option>
                 <option value="مهندس عمران">مهندس عمران</option>
                 <option value="برقکار">برقکار</option>
                 <option value="تراکتور">تراکتور</option>
               </select>
               <button onClick={handleSortByAlphabet} className="btn-filter">
                 Sort by Alphabet
               </button>
               <button onClick={handleSortByLiked} className="btn-filter">
                 Sort by Liked Count
               </button>
               <button onClick={handleSortByCommentCount} className="btn-filter">
                 Sort by Comment Count
               </button>
             </div>
             <button
               onClick={closeFilterModal}
               className="text-white bg-gray-900 rounded-md px-3 py-2 focus:outline-none mt-4"
             >
               Close
             </button>
           </div>
         </div>
         
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
