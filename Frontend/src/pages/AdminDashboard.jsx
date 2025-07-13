import React, { useEffect, useState } from 'react';
import { fetchVenues, addVenue, blockDates } from '../services/api';
import VenueCard from '../components/VenueCard';

const AdminDashboard = () => {
  const [venues, setVenues] = useState([]);
  const [form, setForm] = useState({ name: '', description: '', location: '', price: '' });

  useEffect(() => {
    loadVenues();
  }, []);

  const loadVenues = async () => {
    const res = await fetchVenues();
    setVenues(res.data);
  };

  const handleAddVenue = async (e) => {
    e.preventDefault();
    await addVenue({ ...form, blockedDates: [], ownerId: "admin001" });
    setForm({ name: '', description: '', location: '', price: '' });
    loadVenues();
  };

  const handleBlockDate = async (venue) => {
    const date = prompt('Enter date to block (YYYY-MM-DD):');
    if (date) {
      await blockDates(venue._id, [date]);
      loadVenues();
    }
  };

  return (
    <div className="page">
    <h2>Admin Dashboard</h2>
    
<form onSubmit={handleAddVenue} style={{ display: 'flex', flexDirection: 'column', maxWidth: 500 }}>
  <input placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
  <input placeholder="Location" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} required />
  <input placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} required />
  <input type="number" placeholder="Price" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} required />
  <button type="submit">Add Venue</button>
</form>



      {venues.map((v) => (
        <VenueCard key={v._id} venue={v} onBlock={handleBlockDate} />
      ))}
    </div>
  );
};

export default AdminDashboard;
