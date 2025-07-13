import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000',
});

export const fetchVenues = () => API.get('/venues');
export const addVenue = (venue) => API.post('/venues', venue);
export const blockDates = (id, dates) => API.patch(`/venues/${id}/availability`, { dates });
export const bookVenue = (booking) => API.post('/bookings', booking);
