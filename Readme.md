# QuickShow – Full Stack Movie Ticket Booking Platform [IN PROGRESS]

QuickShow is a full-stack web application designed to simulate a real-world movie ticket booking system. It combines a modern, cinematic frontend with a scalable backend to manage movies, users, bookings, and seat availability.

---

## Features

### User Features
- Browse movies with rich visuals
- View detailed movie information (genre, duration, release year)
- Select showtimes and seats
- Book tickets and manage bookings
- Add movies to favourites
- Secure authentication and user sessions
- Responsive design for all screen sizes

### Authentication
- Email & OAuth authentication using Clerk
- User profile and session management
- Protected routes for bookings and favourites

### Backend Features
- RESTful APIs for movies, bookings, and users
- Seat availability management
- Booking persistence
- Secure API structure
- Scalable backend architecture

---

## Tech Stack

### Frontend
- **React**
- **Vite**
- **Tailwind CSS**
- **React Router DOM**
- **Lucide React Icons**
- **React Hot Toast**
- **Clerk Authentication**

### Backend
- **Node.js**
- **Express.js**
- **MongoDB** (or any NoSQL/SQL DB – configurable)
- **Mongoose** (if MongoDB is used)
- **JWT / Clerk session validation**
- **REST APIs**

---

## Project Structure

```txt
QuickShow/
├── client/                 # Frontend (React + Vite)
│   ├── src/
│   │   ├── components/     # Navbar, Footer, UI components
│   │   ├── pages/          # Home, Movies, MovieDetails, SeatLayout
│   │   ├── assets/         # Images and static files
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── public/
│   └── vite.config.js
│
├── server/                 # Backend (Node + Express)
│   ├── controllers/        # Business logic
│   ├── routes/             # API routes
│   ├── models/             # Database schemas
│   ├── middleware/         # Auth & validation
│   ├── config/             # DB & env config
│   └── server.js
│
└── README.md
