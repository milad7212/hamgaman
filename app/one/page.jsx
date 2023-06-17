"use client";
import { useCallback, useState } from "react";
import Header from "../components/header";
import PersonCard from "../components/personCard";
import { RiFilter2Fill, RiArrowUpDownFill } from "react-icons/ri";

function App() {
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

  const [filterFavorites, setFilterFavorites] = useState(false);
  const [sortBy, setSortBy] = useState("");
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);

  const clickOnHeart = useCallback(
    (selectedCard) => {
      const index = dataPeople.findIndex(
        (person) => person.id === selectedCard.id
      );
      if (index !== -1) {
        const updatedPeople = [...dataPeople];
        updatedPeople[index].favorite = !updatedPeople[index].favorite;
        setDataPeople(updatedPeople);
      }
    },
    [dataPeople]
  );

  const handleFilterFavorites = () => {
    setFilterFavorites((prevState) => !prevState);
    setIsFilterMenuOpen(true);
  };

  const handleSortBy = () => {
    if (sortBy === "asc") {
      setSortBy("desc");
    } else {
      setSortBy("asc");
    }
    setIsFilterMenuOpen(true);
  };

  const filteredAndSortedPeople = dataPeople
    .filter((person) => !filterFavorites || person.favorite)
    .sort((a, b) => {
      if (sortBy === "asc") {
        return a.name.localeCompare(b.name);
      } else if (sortBy === "desc") {
        return b.name.localeCompare(a.name);
      }
      return 0;
    });

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="flex-grow">
        <div className="container mx-auto py-4 px-6">
          <div className="flex justify-between mb-4">
            <button
              onClick={handleFilterFavorites}
              className="flex items-center space-x-1 px-3 py-1 bg-gray-900 text-white rounded-lg focus:outline-none"
            >
              <RiFilter2Fill size={18} />
              <span>{filterFavorites ? "All" : "Favorites"}</span>
            </button>
            <button
              onClick={handleSortBy}
              className="flex items-center space-x-1 px-3 py-1 bg-gray-900 text-white rounded-lg focus:outline-none"
            >
              <RiArrowUpDownFill size={18} />
              <span>{sortBy === "asc" ? "A-Z" : "Z-A"}</span>
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Person card */}
            {filteredAndSortedPeople.map((person) => (
              <PersonCard
                data={person}
                key={person.id}
                clickOnHeart={clickOnHeart}
              />
            ))}
          </div>
          {isFilterMenuOpen && (
            <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
              {/* Add your filter/sort menu content and logic here */}
              <div className="bg-white rounded-lg p-4">
                <h3 className="text-xl font-bold mb-2">Filter/Sort Menu</h3>
                {/* Add your filter/sort options here */}
                {/* Close button */}
                <button
                  onClick={() => setIsFilterMenuOpen(false)}
                  className="text-white bg-gray-900 rounded-md px-3 py-1 focus:outline-none"
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
}

export default App;
