import React from 'react';

const VenueCard = ({ venue, onBook, onBlock }) => {
  return (
    <div className="venue-card">
      <h3>{venue.name}</h3>
      <p>{venue.description}</p>
      <p><strong>Location:</strong> {venue.location}</p>
      <p><strong>Price:</strong> ₹{venue.price}</p>
      <p><strong>Blocked Dates:</strong> {venue.blockedDates.join(', ') || "None"}</p>

      {onBook && (
        <button onClick={() => onBook(venue)}>Book</button>
      )}

      {onBlock && (
        <button onClick={() => onBlock(venue)}>Block Date</button>
      )}
    </div>
  );
};

export default VenueCard;
