import React, { useState } from 'react';

const BookingForm = ({ venue, onSubmit }) => {
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(date);
  };

  return (
   <form onSubmit={handleSubmit}>
  <h4>Book {venue.name}</h4>
  <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
  <button type="submit">Confirm Booking</button>
</form>
  );
};

export default BookingForm;
