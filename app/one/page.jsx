import Header from "../components/header";


function App() {
  const people = [
    {
      id: 1,
      name: "میلاد حسنی",
      skills: ["مهندس عمران", "برقکار", "تراکتور"],
    },
    { id: 2, name: "سجاد حسنی", skills: ["داربست ", "قالب بندی"] },
    { id: 3, name: "عباد حسنی", skills: ["طراحی نما", "پیمانکار"] },
    // Add more people data
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      
      <Header/>

      {/* Main content */}
      <main className="flex-grow">
        <div className="container mx-auto py-4 px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Person card */}
            {people.map(person => (
              <div key={person.id} className="bg-white rounded shadow-lg overflow-hidden">
                <div className="h-40 p-1 bg-gray-900 rounded-b-sm flex overflow-hidden relative">
                  <img className="h-full aspect-square rounded-sm shadow-sm" src='/images/milad.jpeg' alt="My Image" />
                </div>
                <div className="p-4">
                  <h2 className="text-lg font-bold">{person.name}</h2>
                  <p className="text-gray-700 my-2">{person.skills.join(" |  ")}</p>
                  <p className="text-left my-2 text-gray-800">
                    <a className="text-left my-2 text-gray-800" href="tel:09139939426">09139939426</a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;