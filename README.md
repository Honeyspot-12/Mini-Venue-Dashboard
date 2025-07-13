# Eazyvenue – Mini Venue Booking Dashboard

This is a full-stack web application built with React.js, Node.js, Express.js, and MongoDB. It allows users to browse and book venues, and allows admins to manage availability.

## Features

- User booking interface
- Admin venue management
- Date-based availability updates
- RESTful APIs for venues and bookings

---

## 🚀 Advanced Features Ideation

Here are ideas to enhance the Eazyvenue platform in future versions:

### 🔍 1. Track User Search Activity
- Record user search queries (like location, date, price).
- Helps show popular searches and personalize results.
- Store logs in a `SearchLogs` collection with user ID and filters.

### 📊 2. Admin Analytics Dashboard
- Show total bookings, popular venues, and revenue.
- Helps admins monitor trends.
- Use MongoDB aggregation + charts in frontend.

### 📅 3. Calendar View for Availability
- Display availability using a calendar component.
- Easier for users to book and admins to block dates.
- Use color-coded dates to show status.

### 🔐 4. Basic Authentication
- Secure login for admins and venue owners.
- JWT-based auth with role-based access.
- Personalized dashboard for each user type.

---

## 📁 Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js + Express.js
- **Database**: MongoDB
