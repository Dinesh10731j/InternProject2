import { useState } from "react";
import Header from "./Components/Header";
import Searchbar from "./Components/Searchbar";
import Courses from "./Components/Courses";

const App = () => {
  const [searchInput, setSearchInput] = useState("");
  const handleChange = (input) =>{
    setSearchInput(input);

  }
  return (
    <div className="h-[170vh] w-[100%] bg-custom-gradient">
      <Header />
      <section className="flex flex-row gap-2 justify-evenly items-center">
        <section className="text-5xl  tracking-wide font-poppins font-normal text-[#000000]">
          RESOURCES
        </section>
        <Searchbar handleChange={handleChange}/>
      </section>
      <Courses  SearchInput={searchInput}/>
    </div>
  );
};

export default App;
