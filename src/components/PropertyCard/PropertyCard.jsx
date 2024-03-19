import "./PropertyCard.css";
import { FaBed, FaBath, FaHome, FaMapMarkedAlt, FaStar } from "react-icons/fa";

const PropertyCard = ({ property }) => {
  return (
    <div className="propertyCard">
      <div className="propertyImage">
        <img src={`/img/${property.images[0]}`} alt="property" />
      </div>
      <div className="propertyDeatils">
        <p className="property__name">{property.name}</p>
        <p className="property__desc">{property.description}</p>
        <div className="infos">
          <p>
            <FaBed size={13} color="grey" />
            <span className="bold">Bedrooms :</span> {property.gradeSort}
          </p>
          <p>
            <FaBath size={13} color="grey" />
            <span className="bold">Bathrooms :</span> {property.bathrooms}
          </p>
          <p>
            <FaHome size={13} color="grey" />
            <span className="bold">Square Meter :</span> {property.floorArea}
          </p>
          <p>
            <FaMapMarkedAlt size={13} color="grey" />
            <span>
              Village Centre within {property.villageCentreDistanceId}m
            </span>
          </p>
          {property.upgradedFacilities && (
            <p>
              <FaStar size={13} color="grey" />
              <span>Upgraded Facilities</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
