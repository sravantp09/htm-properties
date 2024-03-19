import "./Properties.css";
import { useContext } from "react";
import { PropertyContext } from "../../contexts/PropertyContext";
import PropertyCard from "../PropertyCard/PropertyCard";

const Properties = () => {
  const { searchQuery, setSearchQuery, propertiesList } =
    useContext(PropertyContext);

  return (
    <>
      <div className="searchName">
        {searchQuery && propertiesList.length > 0 && (
          <div className="result">
            Results for: <span>{searchQuery}</span>
          </div>
        )}
      </div>
      <div className="section">
        <p className="title">Available Properties ({propertiesList.length})</p>
        {searchQuery && (
          <button onClick={() => setSearchQuery("")}>Clear Filter</button>
        )}
      </div>

      {/* Display avaiable properties */}
      {propertiesList.length === 0 ? (
        <p className="error">
          No properties found for your search "
          <span style={{ fontStyle: "italic", textDecoration: "underline" }}>
            {searchQuery}
          </span>
          "
        </p>
      ) : (
        // rendering property card
        <div className="properties">
          {propertiesList.map((property) => (
            <PropertyCard property={property} key={property.id} />
          ))}
        </div>
      )}
    </>
  );
};

export default Properties;
