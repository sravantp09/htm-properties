import { useState, useEffect } from "react";
import "./App.css";
import properties from "./data/properties.json";
import { PropertyContext } from "./contexts/PropertyContext";
import Navbar from "./components/Navbar/Navbar";
import Properties from "./components/Properties/Properties";

function App() {
  // State variables
  const [searchQuery, setSearchQuery] = useState("");
  const [propertiesList, setPropertiesList] = useState(properties);

  // Function that perform filtering on the properties data
  function applySearch() {
    return properties.filter((property) => {
      const search = searchQuery.toLowerCase().trim().replace(/\s+/g, " ");
      const { name, description } = property;

      if (
        name.toLowerCase().includes(search) ||
        description.toLowerCase().includes(search)
      ) {
        return property;
      }
    });
  }

  // used to update properties list when there is a change in search query
  useEffect(() => {
    setPropertiesList(applySearch());
  }, [searchQuery]);

  return (
    <main className="container">
      <PropertyContext.Provider
        value={{ searchQuery, setSearchQuery, propertiesList }}
      >
        <Navbar />
        <Properties />
      </PropertyContext.Provider>
    </main>
  );
}

export default App;
