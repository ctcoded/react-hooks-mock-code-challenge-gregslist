import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, onRemoveListing}) {
  return (
    <main>
      <ul className="cards">
        {listings.map((listing) => (
          <ListingCard 
            key={listing.id}
            listing={listing}
            image={listing.image}
            onRemoveListing={onRemoveListing}
            />
          ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
