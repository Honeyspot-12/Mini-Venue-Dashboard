import React, { useState, useEffect } from 'react';
import { fetchVenues, bookVenue } from '../services/api';
import VenueCard from '../components/VenueCard';
import BookingForm from '../components/BookingForm';

const UserHome = () => {
  const [venues, setVenues] = useState([]);
  const [selectedVenue, setSelectedVenue] = useState(null);

  useEffect(() => {
    loadVenues();
  }, []);

  const loadVenues = async () => {
    const res = await fetchVenues();
    setVenues(res.data);
  };

  const handleBooking = async (date) => {
    await bookVenue({ venueId: selectedVenue._id, userId: 'user123', date });
    alert('Booking successful!');
    setSelectedVenue(null);
    loadVenues();
  };

  return (
  <div className="page">
    <h2>Browse Venues</h2>
    {venues.map((v) => (
      <VenueCard key={v._id} venue={v} onBook={() => setSelectedVenue(v)} />
    ))}

    {selectedVenue && (
      <BookingForm venue={selectedVenue} onSubmit={handleBooking} />
    )}
  </div>
);
}
export default UserHome;
