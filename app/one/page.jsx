import Header from "../components/header";
import PersonCard from "../components/personCard";


function App() {
  const people = [
    {
      id: 1,
      name: "میلاد حسنی",
      skills: ["مهندس عمران", "برقکار", "تراکتور"],
      favorite:true
    },
    { id: 2,favorite:false, name: "سجاد حسنی", skills: ["داربست ", "قالب بندی"] },
    { id: 3,favorite:false,  name: "عباد حسنی", skills: ["طراحی نما", "پیمانکار"] },
    { id: 3,favorite:true,  name: "عباد حسنی", skills: ["طراحی نما", "پیمانکار"] },
    { id: 3,favorite:false,  name: "عباد حسنی", skills: ["طراحی نما", "پیمانکار"] },
    { id: 3,favorite:true,  name: "عباد حسنی", skills: ["طراحی نما", "پیمانکار"] },
    { id: 3,favorite:false,  name: "عباد حسنی", skills: ["طراحی نما", "پیمانکار"] },
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
              <PersonCard data={person} key={person.id}/>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;